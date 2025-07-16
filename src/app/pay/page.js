export default function PaymentPage() {
    return (
      <main className="min-h-screen bg-gray-900 text-white px-4 py-20 flex items-center justify-center">
        <div className="bg-black bg-opacity-70 p-8 rounded-xl max-w-xl text-center shadow-lg">
          <h1 className="text-4xl font-bold text-indigo-300 mb-6">Payment Options</h1>
  
          <p className="text-lg mb-6">
            A full astrology session costs <strong>1000 DKK</strong> and lasts several hours.
            You can choose your preferred payment method below:
          </p>
  
          <div className="space-y-6 text-left text-md leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-indigo-200 mb-1">📱 MobilePay</h2>
              <p>Send payment to: <strong>+45 21310094</strong></p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-indigo-200 mb-1">💻 PayPal</h2>
              <p>Send to: <strong>rubow10@gmail.com</strong></p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-indigo-200 mb-1">💵 Cash</h2>
              <p>You can also pay in cash at the beginning of the session (in person only).</p>
            </div>
          </div>
  
          <p className="text-sm text-gray-300 mt-8">
            If you have any questions or need to confirm your booking, feel free to contact me at <a href="mailto:rubow10@gmail.com" className="underline">rubow10@gmail.com</a>{' '}
            or send a text to <a href="tel:21310094" className="underline">+45 21310094</a>.
          </p>
        </div>
      </main>
    );
  }
  
  