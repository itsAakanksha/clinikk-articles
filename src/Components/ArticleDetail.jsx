import React from "react";
import image from "../../public/Image.png";
import image2 from "../../public/Image (1).png";
import image3 from "../../public/Image (2).png";
import image4 from "../../public/Image (3).png";
import Card from "./Card";
import cardData from "../cardData.js";
import { Link, useParams } from "react-router-dom";
import { TreatmentData } from "../TreatmentData.js"; // Adjust the path as per your project structure
import Cta from "./Cta.jsx";

function ArticleDetail({ articles }) {
  const { id } = useParams();
  // console.log(id)
  let art = null;
  const cardsArray = cardData.slice(0, 2);
  // const article = articles.find((article) => article.id === Number(id));
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].article.id === Number(id)) {
      art = articles[i].article;
      break;
    }
  }
  console.log(art);
  // const art = articles[0]

  return (
    <>
    <Link to={'/'}>
      <div className="mt-3 p-3 flex items-center cursor-pointer ">
        <span>   <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow ml-2 w-5 h-5 fill-current text-black transition-all duration-300 transform opacity-1 translate-x-[-5px] rotate-[-180deg] group-hover:opacity-100 group-hover:translate-x-0 "
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg> </span>
        <span>Back</span>
      </div>
      </Link>
      <div className="flex flex-col-reverse items-center  lg:mt-8 ">
        <div className="mb-6">
          <div className="font-bold p-4 text-2xl md:my-12 my-6">
            All Treatments
          </div>
          {cardsArray.map((item, index) => (
            <div key={index} className="">
            
              <div className="flex justify-evenly gap-x-4 gap-y-6 flex-wrap">
                {item.type.map(
                  (typeItem, typeIndex) =>
                    typeIndex < 3 && <Card key={typeItem.id} item={typeItem} />
                )}
              </div>
            
              </div>
            ))}
            <Cta/>
        </div>

        <div className="article lg:mx-16 lg:px-32 px-8">
       
          {art?.title && (
            <h1 className="text-4xl font-semibold my-10 text-center">
              {art.title}
            </h1>
          )}

          <img
            className="my-4 w-full object-cover  "
            src={image}
            alt="art Image"
          />

          {art?.introduction && <p>{art.introduction}</p>}
          <br />

          {/* UNDERSTANDING DISEASE */}
          {art?.sections?.[0] && (
            <>
              {art.sections[0]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[0].heading}
                </h2>
              )}
              <div>
                {art.sections[0]?.content?.contentDesc && (
                  <p className="my-2">{art.sections[0].content.contentDesc}</p>
                )}
                <ul>
                  {art.sections[0]?.content?.contUl?.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
              <br />
            </>
          )}

          {/* SYMPTOMS */}
          {art?.sections?.[1] && (
            <>
              {art.sections[1]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[1].heading}
                </h2>
              )}
              <div>
                {art.sections[1]?.content?.contentDesc && (
                  <p className="my-2">{art.sections[1].content.contentDesc}</p>
                )}
                <ul>
                  {art.sections[1]?.content?.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
              <br />
            </>
          )}

          {/* DIAGNOSING */}
          {art?.sections?.[2] && (
            <>
              {art.sections[2]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[2].heading}
                </h2>
              )}
              <div>
                {art.sections[2]?.description && (
                  <p className="my-4">{art.sections[2].description}</p>
                )}
                <ul>
                  {art.sections[2]?.content?.contList?.ul?.ulDes?.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <ul>
                  {art.sections[2]?.content?.contList?.ul?.list?.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
              <img
                className="my-4 w-full object-cover"
                src={image2}
                alt="art Image"
              />
              <br />
            </>
          )}

          {/* EFFECTIVE MANAGEMENT */}
          {art?.sections?.[3] && (
            <>
              {art.sections[3]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[3].heading}
                </h2>
              )}
              {art.sections[3]?.description && (
                <p>{art.sections[3].description}</p>
              )}
              <ol>
                {art.sections[3]?.subsections?.map((subsection, index) => (
                  <li key={index}>
                    {subsection?.subheading && (
                      <p>
                        <strong>{subsection.subheading}</strong>
                      </p>
                    )}
                    {subsection?.content?.contDesc && (
                      <p>{subsection.content.contDesc}</p>
                    )}
                    <ul>
                      {subsection?.content?.contUl?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <br />
            </>
          )}

          {/* ASSOCIATED COSTS */}
          {art?.sections?.[4] && (
            <>
              {art.sections[4]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[4].heading}
                </h2>
              )}
              {art.sections[4]?.description && (
                <div>{art.sections[4].description}</div>
              )}
              <ol>
                {art.sections[4]?.sections?.map((section, index) => (
                  <li key={index}>
                    {section?.title && <h3>{section.title}</h3>}
                    <ul>
                      {section?.items?.map((item, idx) => (
                        <li key={idx}>
                          <strong>{item.name}</strong>: {item.costRange}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              {art.sections[4]?.totalCost?.title && (
                <h2 className="text-xl font-semibold">
                  {art.sections[4].totalCost.title}
                </h2>
              )}
              {art.sections[4]?.totalCost?.desc && (
                <div>{art.sections[4].totalCost.desc}</div>
              )}
              <img
                className="my-4  w-full object-cover"
                src={image3}
                alt="art Image"
              />
              <br />
            </>
          )}

          {/* TRUSTED PARTNER */}
          {art?.sections?.[5] && (
            <>
              {art.sections[5]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[5].heading}
                </h2>
              )}
              {art.sections[5]?.content && <div>{art.sections[5].content}</div>}
              <br />
            </>
          )}

          {/* WHY CHOOSE CLINIKK */}
          {art?.sections?.[6] && (
            <>
              {art.sections[6]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[6].heading}
                </h2>
              )}
              <ul>
                {art.sections[6]?.content?.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
              <img
                className="my-4 w-full object-cover"
                src={image4}
                alt="art Image"
              />
              <br />
            </>
          )}

          {/* CHOOSING THE RIGHT HEALTHCARE FACILITY */}
          {art?.sections?.[7] && (
            <>
              {art.sections[7]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[7].heading}
                </h2>
              )}
              <div>
                <ol>
                  {art.sections[7]?.content?.map((item, index) => {
                    const [boldText, normalText] = item.split(":");
                    return (
                      <li key={index}>
                        <strong>{boldText}:</strong>
                        {normalText}
                      </li>
                    );
                  })}
                </ol>
              </div>
              <br />
            </>
          )}

          {/* PREVENTIVE MEASURES */}

          <div className="preventive-measures">
            {art.sections[8]?.heading && (
              <h2 className="text-xl font-semibold">
                {art.sections[8].heading}
              </h2>
            )}
            <p>{art.sections[8]?.description}</p>
            <ol>
              {art.sections[8].content?.map((item, index) => (
                <li key={index}>
                  {typeof item === "string" ? (
                    <p>{item}</p>
                  ) : (
                    <ul>
                      {item.subpoints.map((subpoint, idx) => (
                        <li key={idx}>{subpoint}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* CONCLUSION */}
          {art?.sections?.[9] && (
            <>
              {art.sections[9]?.heading && (
                <h2 className="text-xl font-semibold">
                  {art.sections[9].heading}
                </h2>
              )}
              {art.sections[9]?.content && <div>{art.sections[9].content}</div>}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ArticleDetail;
