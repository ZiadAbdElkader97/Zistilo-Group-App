import { FaqData } from "../assets/data/FAQData";

export default function FAQ() {
  return (
    <>
      <div className="p-8 vsm:p-0 w-full" id="faq">
        <div className="bg-white p-4 rounded-lg py-8">
          <h4 className="text-4xl font-bold text-[60px] sm:text-[50px] vsm:text-[40px] tracking-widest uppercase text-center">
            {FaqData.title}
          </h4>
          <p className="text-center text-gray-600 text-md mt-2">
            {FaqData.title2}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
            {FaqData.FaqDetails.map((item, i) => (
              <div key={i} className="flex space-x-8 mt-8">
                <div></div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    {item.question}
                  </h4>
                  <p className="text-gray-600 my-2 vsm:text-[16px]">
                    {item.details}
                  </p>
                  <a
                    href="#"
                    className="text-[#06bbc4] hover:text-cyan-700 hover:underline capitalize"
                    title={item.read}
                  >
                    {item.read}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}