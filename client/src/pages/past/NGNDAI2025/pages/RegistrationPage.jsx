function RegistrationPage() {
    return (<section
        id="publication"
        className="mb-16 flex-col rounded-md shadow-sm lg:p-16 bg-base-200/20 w-full text-base-content">

        <h1 className="mb-8 text-4xl font-bold text-primary font-playfair">Registration</h1>
        <h3 className="text-xl font-medium underline mb-4">Registration Fee</h3>

        <div className="flex flex-col gap-4">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-200">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 border">Participant Type</th>
                        <th className="px-4 py-2 border">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-4 py-2 border font-medium">Indian Participants from Academic Institutes</td>
                        <td className="px-4 py-2 border text-nowrap">INR 8,500 + 18% GST = INR 10,030</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border font-medium">Indian Industry Participants</td>
                        <td className="px-4 py-2 border">INR 12,000 + 18% GST = INR 14,160</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border font-medium">Foreign Participants (Academic and Industry)</td>
                        <td className="px-4 py-2 border">USD 300</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border font-medium">Student’s Participants</td>
                        <td className="px-4 py-2 border">INR 6,000 + 18% GST = INR 7,080</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border font-medium">Additional ticket for attending the conference
                            along
                            with conference dinner
                        </td>
                        <td className="px-4 py-2 border">INR 3,000</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border font-medium">Poster Presentation Fee</td>
                        <td className="px-4 py-2 border">INR 4,000</td>
                    </tr>
                    </tbody>
                </table>
                <p className="text-error">Please note that any paper that is not covered by the registration fee will not be
                    published in the Conference Proceedings.</p>

            </div>

            <div>
                <h3 className="text-xl font-medium underline mb-4">Account Details</h3>

                <div className="flex flex-col gap-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border border-gray-200">
                            <tbody>
                            <tr>
                                <td className="px-4 py-2 border font-medium">Branch name and Bank Code</td>
                                <td className="px-4 py-2 border">SBI, MNNIT Allahabad</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border font-medium">Name of Account Holder</td>
                                <td className="px-4 py-2 border">SNFCE MNNIT Allahabad</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border font-medium">Account Number</td>
                                <td className="px-4 py-2 border">10424975574</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border font-medium">IFSC code</td>
                                <td className="px-4 py-2 border">SBIN0002580</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border font-medium">MICR code</td>
                                <td className="px-4 py-2 border">211002016</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium underline mb-4">Registration Procedure</h3>
                        <p>
                            All participants are requested to register online at <a target="_blank" className="text-blue-800 underline" href="https://forms.gle/YhL6b3sz8aXy1o8P6">https://forms.gle/YhL6b3sz8aXy1o8P6</a>.
                            The Participants should submit the filled registration form along with an electronic
                            receipt.
                            Please mention NGNDAI 2025 in transaction remarks.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    </section>)
}

export default RegistrationPage;