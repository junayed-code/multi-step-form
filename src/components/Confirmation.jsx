import thankYouIcon from "../assets/images/icon-thank-you.svg";

function Confirmation() {
  return (
    <div className="grid gap-y-4 basis-full justify-items-center content-center my-auto">
      <img className="lg:-mt-5" src={thankYouIcon} alt="Thank you icon" />
      <h3 className="text-3xl font-bold mt-2">Thank you!</h3>
      <p className="text-lg text-center text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Confirmation;
