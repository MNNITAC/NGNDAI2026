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
                        <td className="px-4 py-2 border text-nowrap">INR 9,000 + 18% GST = INR 10,620</td>
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
                        <td className="px-4 py-2 border">INR 7,000 + 18% GST = INR 8,260</td>
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
                            All participants are requested to register online at <a target="_blank" className="text-blue-800 underline" href="https://forms.gle/gwse2DCMTj5dtMGZ7">https://forms.gle/gwse2DCMTj5dtMGZ7</a>.
                            The Participants should submit the filled registration form along with an electronic
                            receipt.
                            Please mention NGNDAI 2026 in transaction remarks.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-medium underline mb-4">Refund & Cancellation Policy</h3>

                        <p><strong>Registration fees are non-refundable</strong><br/>
                            Conference registration covers costs that are committed well in advance (venue, publication processing, materials, and organisation). All registration fees, once paid, are completely non-refundable and non-transferable, except in the single case where the conference is cancelled in its entirety by the organisers.</p>

                        <p><strong>Cancellation by the participant</strong><br/>
                            If you cancel your participation, withdraw your paper, fail to attend, or are unable to present for any reason, no refund will be issued. This applies to all registration categories — including author and listener/attendee registrations — regardless of when the cancellation is requested.</p>

                        <p><strong>Non-refundable charges</strong><br/>
                            Bank charges, payment-gateway fees, currency-conversion charges, and applicable government taxes are levied by third parties and are non-refundable in all cases.</p>

                        <p><strong>Duplicate & erroneous payments — If you were charged twice</strong><br/>
                            If a technical error results in a duplicate or excess payment, the duplicate/excess amount will be refunded to the original payment method after verification. Please report such cases promptly with proof of payment.</p>

                        <p><strong>Cancellation by the organisers</strong><br/>
                            The only case in which fees are refunded is when the organisers cancel the conference in its entirety. Registered participants will be informed and the registration fee will be refunded. The physical conduct of the conference is subject to prevailing government guidelines and may move to an online-only mode; a change of mode is not a cancellation and does not entitle participants to a refund, as the technical programme and publication process continue. Bank, payment-gateway, currency-conversion, and applicable tax charges levied by third parties may not be recoverable even in this case.</p>

                        <p><strong>How refunds are processed</strong><br/>
                            Approved refunds are made to the original payment method within a reasonable period after approval, subject to the timelines of the payment gateway and banks involved.</p>
                    </div>


                </div>
            </div>
        </div>
    </section>)
}

export default RegistrationPage;