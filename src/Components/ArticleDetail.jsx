import React from "react";
import image from "../../public/Image.png";
import image2 from "../../public/Image (1).png";
import image3 from "../../public/Image (2).png";
import image4 from "../../public/Image (3).png";
import Card from "./Card";
import cardData from "../cardData.js";
import { useParams } from "react-router-dom";
import { TreatmentData } from "../TreatmentData.js"; // Adjust the path as per your project structure

function ArticleDetail({ articles }) {
  const { id } = useParams();
  // console.log(id)
  let art = null;
  const cardsArray = cardData.slice(0, 6);
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
      <div className="border-y-2 p-3 ">
        <span>---  </span>
        <span>Back</span>
      </div>
      <div className="flex flex-col-reverse items-center mt-4 lg:mt-8 ">
        <div>
          <div className="font-bold p-4 text-2xl md:my-12 my-6">
            All Treatments
          </div>
          <div className="flex justify-evenly gap-y-6 flex-wrap">
            {cardsArray.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="article lg:mx-16 lg:px-32 px-8">
          <div className="primary-color font-semibold">4 min read</div>
          {art?.title && (
            <h3 className="text-4xl font-semibold my-8 text-center">
              {art.title}
            </h3>
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
                <h4 className="text-xl font-semibold">
                  {art.sections[0].heading}
                </h4>
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
                <h4 className="text-xl font-semibold">
                  {art.sections[1].heading}
                </h4>
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
                <h4 className="text-xl font-semibold">
                  {art.sections[2].heading}
                </h4>
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
                <h4 className="text-xl font-semibold">
                  {art.sections[3].heading}
                </h4>
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
                <h4 className="text-xl font-semibold">
                  {art.sections[4].heading}
                </h4>
              )}
              {art.sections[4]?.description && (
                <div>{art.sections[4].description}</div>
              )}
              <ol>
                {art.sections[4]?.sections?.map((section, index) => (
                  <li key={index}>
                    {section?.title && <h5>{section.title}</h5>}
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
                <h4 className="text-xl font-semibold">
                  {art.sections[4].totalCost.title}
                </h4>
              )}
              {art.sections[4]?.totalCost?.desc && (
                <div>{art.sections[4].totalCost.desc}</div>
              )}
              <img
                className="my-4 w-full object-cover w-full object-cover"
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
                <h4 className="text-xl font-semibold">
                  {art.sections[5].heading}
                </h4>
              )}
              {art.sections[5]?.content && <div>{art.sections[5].content}</div>}
              <br />
            </>
          )}

          {/* WHY CHOOSE CLINIKK */}
          {art?.sections?.[6] && (
            <>
              {art.sections[6]?.heading && (
                <h4 className="text-xl font-semibold">
                  {art.sections[6].heading}
                </h4>
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
                <h4 className="text-xl font-semibold">
                  {art.sections[7].heading}
                </h4>
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
              <h4 className="text-xl font-semibold">
                {art.sections[8].heading}
              </h4>
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
                <h4 className="text-xl font-semibold">
                  {art.sections[9].heading}
                </h4>
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
