import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFERENCE_IMAGES_DIR = path.join(__dirname, '..', 'public', 'conferenceImages');
const THUMB_WIDTH = 400;
const THUMB_QUALITY = 75;
const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];

async function generateThumbnails() {
    const manifest = {};
    
    // Get all day folders
    const dayFolders = fs.readdirSync(CONFERENCE_IMAGES_DIR)
        .filter(item => {
            const fullPath = path.join(CONFERENCE_IMAGES_DIR, item);
            return fs.statSync(fullPath).isDirectory() && item.startsWith('day');
        })
        .sort();

    console.log(`Found ${dayFolders.length} day folder(s): ${dayFolders.join(', ')}\n`);

    for (const dayFolder of dayFolders) {
        const dayPath = path.join(CONFERENCE_IMAGES_DIR, dayFolder);
        const thumbsPath = path.join(dayPath, 'thumbs');

        // Create thumbs directory if it doesn't exist
        if (!fs.existsSync(thumbsPath)) {
            fs.mkdirSync(thumbsPath, { recursive: true });
        }

        // Get all image files in the day folder (not in thumbs subfolder)
        const imageFiles = fs.readdirSync(dayPath)
            .filter(file => {
                const ext = path.extname(file).toLowerCase();
                const fullPath = path.join(dayPath, file);
                return VALID_EXTENSIONS.includes(ext) && fs.statSync(fullPath).isFile();
            })
            .sort();

        console.log(`📁 ${dayFolder}: ${imageFiles.length} images found`);

        const dayImages = [];
        let processed = 0;
        let skipped = 0;

        for (const imageFile of imageFiles) {
            const inputPath = path.join(dayPath, imageFile);
            // Always output as lowercase .jpg for consistency
            const thumbFilename = path.parse(imageFile).name.toLowerCase() + '.jpg';
            const outputPath = path.join(thumbsPath, thumbFilename);

            // Skip if thumbnail already exists and is newer than original
            if (fs.existsSync(outputPath)) {
                const originalStat = fs.statSync(inputPath);
                const thumbStat = fs.statSync(outputPath);
                if (thumbStat.mtimeMs >= originalStat.mtimeMs) {
                    // Thumbnail is up to date, skip generation but still add to manifest
                    dayImages.push({
                        src: `/conferenceImages/${dayFolder}/${imageFile}`,
                        thumb: `/conferenceImages/${dayFolder}/thumbs/${thumbFilename}`,
                        name: imageFile
                    });
                    skipped++;
                    continue;
                }
            }

            try {
                await sharp(inputPath)
                    .resize(THUMB_WIDTH, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .jpeg({ quality: THUMB_QUALITY, progressive: true })
                    .toFile(outputPath);

                dayImages.push({
                    src: `/conferenceImages/${dayFolder}/${imageFile}`,
                    thumb: `/conferenceImages/${dayFolder}/thumbs/${thumbFilename}`,
                    name: imageFile
                });
                processed++;
            } catch (error) {
                console.error(`   ❌ Error processing ${imageFile}: ${error.message}`);
            }
        }

        manifest[dayFolder] = dayImages;
        console.log(`   ✅ ${processed} thumbnails generated, ${skipped} skipped (already up-to-date)`);
    }

    // Write manifest file
    const manifestPath = path.join(CONFERENCE_IMAGES_DIR, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    
    const totalImages = Object.values(manifest).reduce((sum, arr) => sum + arr.length, 0);
    console.log(`\n🎉 Done! Manifest written with ${totalImages} total images across ${dayFolders.length} days.`);
    console.log(`   📄 ${manifestPath}`);
}

generateThumbnails().catch(console.error);
