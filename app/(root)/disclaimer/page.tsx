import React from "react";
import camelBg from "@/components/svg/camel.png";
import vetLogo from "@/components/svg/vet_logo.svg";
import rabitLogo from "@/components/svg/rabit_logo.svg";
import gradientBg from "@/components/svg/linearGradient.svg";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div
      className=""
    // style={{
    //   backgroundImage: `url(${gradientBg.src})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundPositionX: "center",
    //   backgroundPositionY: "top",
    // }}
    >
      <div className="text-left sm:text-center flex w-[80%] sm:w-[90%] z-10 relative mx-auto  ">
        <div className="pt-[10rem]  w-full ">
          <div className="my-12 w-full flex sm:items-center flex-col gap-5">
            <h2 className="font-outfit text-3xl sm:text-6xl font-bold text-white">
              Disclaimer
            </h2>

            <div className="rounded-xl bg-[#45484E] border w-full sm:w-[80%] border-[#a1a2a5] py-5 px-5">
              <div>
                <p className="text-left text-white font-bold my-6">Interpretation and Definitions</p>
                <p className="text-left text-white font-bold">Definitions</p><br/>
                <p className="text-left text-white">For the purposes of this Disclaimer:</p>
                <div>
                  <li className="text-left text-white"><b>Entity: </b>(referred to as either &quot;the Entity&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to XRP Kuwait, Kuwait City, Kuwait. Running and operated solely by
                    Abdullah A. alias (@33baid)</li>
                  <li className="text-left text-white"><b>Purpose:</b> personal use; non-profit.</li>
                  <li className="text-left text-white"><b>Service:</b> refers to the Website.</li>
                  <li className="text-left text-white"><b>You:</b> means the individual accessing the Service, or the entity, or other legal entity on behalf of which such individual is accessing or using the Service,
                    as applicable.</li>
                  <li className="text-left text-white"><b>Website:</b> refers to XRP Kuwait, accessible from https://xrpkuwait.com, established on 05-06-2023.</li>
                  <li className="text-left text-white"><b>Affiliation:</b> XRP Kuwait is not affiliated with any company or service provider and foundations.</li>
                  <li className="text-left text-white"><b>Fees:</b> XRP Kuwait is totally free of charge and is fully funded by the sole founder Abdullah A. alias (@33baid).</li>
                  <li className="text-left text-white"><b>Donations/Incentives:</b> XRP Kuwait does not accept donations and incentives from individuals or organizations.</li>
                </div>
                <p className="text-left text-white font-bold my-6">Disclaimer</p>
                <p className="text-left text-white">
                  The purpose of <b><i>XRP Kuwait</i></b> is to provide infrastructure to contribute to the XRPL and support the XRPL ecosystem
                  and its decentralization. XRP Kuwait is solely funded and operated by <b>Abdullah A. alias (@33baid).</b> The information
                  provided by XRP Kuwait on (<a href="https://xrpkuwait.com">https://xrpkuwait.com</a>) is for general informational purposes only. It does not constitute
                  legal or professional advice. All information is expressed on XRP Kuwait is for the sole founder Abdullah A. alias
                  (@33baid) and does not necessarily reflect the opinions of any entities.
                </p>

                <p className="text-left text-white font-bold my-6">External Links Disclaimer</p>
                <p className="text-left text-white">
                  XRP Kuwait Service may include external links to other websites. The external links are for 
                  informational purposes only. XRP Kuwait does not endorse or favor these external links and 
                  is not affiliated with any. Furthermore, XRP Kuwait bears no responsibility for the accuracy, 
                  relevance, legality, timeliness, or content of these external links. 
                </p>

                <p className="text-left text-white font-bold my-6">Errors and Omissions Disclaimer</p>
                <p className="text-left text-white">
                  XRP Kuwait has attempted to ensure that the information covered in this website has been obtained from accurate and reliable sources. Yet, 
                  XRP Kuwait is not responsible for any errors or omissions arising while obtaining the information. XRP Kuwait may also encounter delays and 
                  inaccuracies due to the continuing changes and updates.
                </p>

                <p className="text-left text-white font-bold my-6">No Responsibility Disclaimer</p>
                <p className="text-left text-white">
                  The material and information contained on XRP Kuwait is for general use purposes only. XRP Kuwait visitors should not rely upon the material 
                  or information on <b>XRP Kuwait</b> as a basis for making and engaging in professional, business, and legal activities. Thus, XRP Kuwait visitors 
                  should not use the presented information as a substitute to obtain consultation with expert advisors on accounting, tax, and legal matters. 
                  XRP Kuwait is not responsible for the use of information by visitors. Each visitor accepts full responsibility for such incidental and 
                  consequential damages when accessing and using the use of the Service.
                </p>

                <p className="text-left text-white font-bold my-6">&quot;Use at Your Own Risk&quot; Disclaimer</p>
                <p className="text-left text-white">
                  XRP Kuwait visitors must acknowledge that all information in the Service is provided “as is” and there is no guarantee of receiving accurate
                   and complete results. XRP Kuwait makes no warranty of meeting such requirements of website errors, sudden harmful viruses and performance. 
                  Moreover, XRP Kuwait will not liable to any visitors for actions made as a result of reliance on such information provided by the Service, 
                  causing inconveniences, damages, and losses. Thus, visitors should recognize that any actions taken upon the information under this heading 
                  are strictly at their own risk.
                </p>
                <p className="text-left text-white my-6">
                <span className="font-bold">Contact Us</span><br/><br/>
                If you have any questions about these Terms and Conditions, you can contact us by email: <b>support@xrpkuwait.com</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
