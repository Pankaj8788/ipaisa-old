// import React from "react";

// export default function TechTeam() {
//   return (
//     <section className="w-full main-container h-full flex flex-col items-start justify-start gap-12">
//       <h2 className="text-[#0E0067] text-4xl font-bold mt-4">
//         Why Choose iPaisa:
//       </h2>
//       <section className="w-full flex ">
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
//           <p className="font-bold text-2xl text-[#0E0067]">Merchant Payments</p>
//           <p className="mt-4 text-md">
//             We understand that merchant payment processes are essential for
//             business to accept payments securely and efficiently. By partnering
//             with us as a reliable payment aggregator and following best
//             practices for payment processing, merchant can provide their
//             customers with a seamless payment experience and grow their
//             businesses. iPaisa, the online, contactless payments are widely used
//             is India and are accepted by thousands of merchants, both online and
//             offline.
//           </p>
//         </span>
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
//           <p className="font-bold text-2xl text-[#0E0067]">
//             Payments transfer by QR code
//           </p>
//           <p className="mt-4 text-md">
//             We offer QR code payment options, making it easy for businesses of
//             all sizes to accept payments using this method. Secure Online
//             Payment A QR code payments system is highly secure. All information
//             transferred via QR codes is encrypted. This help minimize data loss
//             and security breaches. QR code payments have become increasingly
//             popular in recent years as a quick and convenient way to transfer
//             money. QR code payments offer several benefits over traditional
//             payment methods. They are faster and more convenient, as customers
//             can make payments with just a few taps on their mobile devices. They
//             are also more secure, as QR codes can be encrypted and are difficult
//             to copy or manipulate. QR code payments are widely used in many
//             countries and are becoming increasingly popular around the world.
//             It’s extremely easy to set up a QR code payments system. All a
//             merchant needs to do is generate a QR code unique to their business,
//             print it on paper, and paste onto their countertops. Merchants can
//             partner with us as a payment aggregator to accept QR code payments.
//             Every payment collected via QR code directly gets deposited into the
//             merchant’s bank account. A customer simply needs to open the QR code
//             payment application, scan the QR, and pay. The entire payment
//             process takes less than a couple of seconds to process end-to-end.
//           </p>
//         </span>
//         <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
//           <p className="font-bold text-2xl text-[#0E0067]">Payments by UPI</p>
//           <p className="mt-4 text-md">
//             <b>UPI </b>{" "}
//             <p>
//               is a popular mobile payment method that allows you to transfer
//               funds from one bank account to the other. We support UPI
//             </p>
//             payments, making it easy for users to send and receive payments
//             using this method. Ever since its facilitation, UPI and its
//             facilitated payment application, has made financial transactions
//             much easier for account holders. There are innumerable benefits that
//             explain why you should make UPI payments- · UPI payments are very
//             fast and typically payment can be completed within seconds · Almost
//             every bank allows UPI transactions through mobile applications ·
//             Payments are completely safe. To complete a payment, the user needs
//             to have the SIM card of his mobile number present in his phone and
//             also needs to enter the secret MPIN each time. · UPI Payment
//             facility allows individuals to request money from some other
//             individual · Payments can be made 24*7 · It’s completely free!
//             Unified Payments Interface (UPI) is a popular payment method in
//             India that allows users to transfer funds between bank accounts
//             instantly and securely. UPI payments offer several benefits over
//             traditional payment methods. They are fast, secure, and can be made
//             at any time of the day or night.
//           </p>
//         </span>
//       </section>
//     </section>
//   );
// }

import React, { useState } from "react";

interface ParagraphWithReadMoreProps {
  text: string;
}

const ParagraphWithReadMore: React.FC<ParagraphWithReadMoreProps> = ({
  text,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="mt-4 text-md">
        {isExpanded ? text : text.split(" ").slice(0, 50).join(" ") + "..."}
      </p>
      <button onClick={toggleReadMore} className="text-blue-500 mt-2">
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default function TechTeam() {
  return (
    <section className="w-full main-container h-full flex flex-col items-start justify-start gap-12">
      <h2 className="text-[#0E0067] text-4xl font-bold mt-4">
        Payment services By iPaisa:
      </h2>
      <section className="w-full flex flex-col items-center">
        <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
          <p className="font-bold text-2xl text-[#0E0067]">Merchant Payments</p>
          <ParagraphWithReadMore text="We understand that merchant payment processes are essential for business to accept payments securely and efficiently. By partnering with us as a reliable payment aggregator and following best practices for payment processing, merchant can provide their customers with a seamless payment experience and grow their businesses. iPaisa, the online, contactless payments are widely used is India and are accepted by thousands of merchants, both online and offline." />
        </span>
        <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
          <p className="font-bold text-2xl text-[#0E0067]">
            Payments transfer by QR code
          </p>
          <ParagraphWithReadMore text="We offer QR code payment options, making it easy for businesses of all sizes to accept payments using this method. Secure Online Payment A QR code payments system is highly secure. All information transferred via QR codes is encrypted. This help minimize data loss and security breaches. QR code payments have become increasingly popular in recent years as a quick and convenient way to transfer money. QR code payments offer several benefits over traditional payment methods. They are faster and more convenient, as customers can make payments with just a few taps on their mobile devices. They are also more secure, as QR codes can be encrypted and are difficult to copy or manipulate. QR code payments are widely used in many countries and are becoming increasingly popular around the world. It’s extremely easy to set up a QR code payments system. All a merchant needs to do is generate a QR code unique to their business, print it on paper, and paste onto their countertops. Merchants can partner with us as a payment aggregator to accept QR code payments. Every payment collected via QR code directly gets deposited into the merchant’s bank account. A customer simply needs to open the QR code payment application, scan the QR, and pay. The entire payment process takes less than a couple of seconds to process end-to-end." />
        </span>
        <span className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-10 py-10 shadow-2xl mb-2 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
          <p className="font-bold text-2xl text-[#0E0067]">Payments by UPI</p>
          <ParagraphWithReadMore text="UPI is a popular mobile payment method that allows you to transfer funds from one bank account to the other. We support UPI payments, making it easy for users to send and receive payments using this method. Ever since its facilitation, UPI and its facilitated payment application, has made financial transactions much easier for account holders. There are innumerable benefits that explain why you should make UPI payments. UPI payments are very fast and typically payment can be completed within seconds. Almost every bank allows UPI transactions through mobile applications. Payments are completely safe. To complete a payment, the user needs to have the SIM card of his mobile number present in his phone and also needs to enter the secret MPIN each time. UPI Payment facility allows individuals to request money from some other individual. Payments can be made 24*7. It’s completely free! Unified Payments Interface (UPI) is a popular payment method in India that allows users to transfer funds between bank accounts instantly and securely. UPI payments offer several benefits over traditional payment methods. They are fast, secure, and can be made at any time of the day or night." />
        </span>
      </section>
    </section>
  );
}
