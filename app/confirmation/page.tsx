import React from "react";

const ConfirmationPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5 text-center">
      <h2 className="w-[200px] text-2xl font-semibold">
        Du har nästan fullföljt processen i att skapa ett konto.{" "}
      </h2>
      <p>
        Du ska ha fått ett bekräftelsemail i den e-post. klicka på länken för
        att bekräfta ditt konto
      </p>
    </div>
  );
};

export default ConfirmationPage;
