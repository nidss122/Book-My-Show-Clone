import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const PaymentModal = ({setIsOpen, isOpen, price}) => {
  const close = () => {
    setIsOpen(false);
  };

  const launchRazorPay = () => {
    let options = {
      key: "",
      amount: price * 100,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie purchase or rent",
      handler: () => {
        setIsOpen(false);
        alert("Payment Successful");
      },
      theme: {color: "#c4242d"}
    };

    let razorPay = window.Razorpay(options);
    razorPay.open();
  }
  
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-60 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-black"
                >
                  Please make a Payment
                </DialogTitle>
                <p className="mt-2 text-sm/6 text-black">
                  Hello please make the payment with the following steps
                </p>
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={launchRazorPay}
                  >
                    Pay ${price}
                  </Button>
                  <Button
                    className="ml-2 inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Cancel Payment
                  </Button>
                </div>
              </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PaymentModal;
