import React from "react";
import image from "../../public/Image.png";
import image2 from "../../public/Image (1).png";
import image3 from "../../public/Image (2).png";
import image4 from "../../public/Image (3).png";
import Card from "./Card";
import cardData from "../cardData.js";
import Form from "./Form.jsx";
import { Link, useParams } from "react-router-dom";
import { TreatmentData } from "../TreatmentData.js"; // Adjust the path as per your project structure
import Cta from "./Cta.jsx";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function ArticleDetail({ articles }) {

  const { id } = useParams();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

    
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
    <Helmet>
    <meta name="title" content={art.metaTitle}/>
    <meta name="description" content={art.metaDesc}/>
    </Helmet>
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
      <div className="flex flex-col items-center  lg:mt-8 ">
      
        <div className="article lg:mx-16 lg:px-32 px-3">
      
          {art?.title && (
            <h1 className="text-4xl font-semibold my-10 text-center">
              {art.title}
            </h1>
          )}

            
            <img
            className="my-4 w-full object-cover  rounded-lg  "
            src={art.image1}
            alt={art.alt1}
          />
    

          {art?.introduction && <p>{art.introduction}</p>}
          <br />

          <>
          {/* UNDERSTANDING DISEASE */}
          {art?.sections?.[0].heading && <h2 className="text-2xl font-semibold">{art?.sections[0].heading}</h2>}
          {art?.sections?.[0].content?.map((section, index) => (
            <div key={index} className="my-4">
              {section?.heading && (
                <h3 className="text-xl font-semibold">{section.heading}</h3>
              )}
              {section?.contDesc && <p className="my-2">{section.contDesc}</p>}
              {section?.contUl?.length > 0 && (
                <ul>
                  {section.contUl.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </>

          {/* SYMPTOMS */}
          {art?.sections?.[1] && (
            <>
              {art.sections[1]?.heading && (
                <h2 className="text-2xl font-semibold">
                  {art.sections[1].heading}
                </h2>
              )}
              <div className="my-4">
                {art.sections[1]?.content?.contDesc && (
                  <p className="my-2">{art.sections[1].content.contDesc}</p>
                )}
                <ul>
                  {art.sections[1]?.content?.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
          
            </>
          )}

          {/* DIAGNOSING */}
          {art?.sections?.[2] && (
            <>
              {art.sections[2]?.heading && (
                <h2 className="text-2xl font-semibold">
                  {art.sections[2].heading}
                </h2>
              )}
              <div className="my-4">
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
                className="my-4 w-full object-cover rounded-lg"
                src={art.image2}
                alt={art.alt2}
              />
             
             
            </>
          )}

          {/* EFFECTIVE MANAGEMENT */}
          {art?.sections?.[3] && (
            <>
              {art.sections[3]?.heading && (
                <h2 className="text-2xl font-semibold">
                  {art.sections[3].heading}
                </h2>
              )}
              {art.sections[3]?.description && (
                <p>{art.sections[3].description}</p>
              )}
              <ol className="ol-small">
                {art.sections[3]?.subsections?.map((subsection, index) => (
                  <li key={index}>
                    {subsection?.subheading && (
                      <h3 className="text-lg font-semibold">
                        <strong>{subsection.subheading}</strong>
                      </h3>
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

          <Form/>
         
          {
            art?.sections?.[4] && (
              <>
                {art.sections[4]?.heading && (
                  <h2 className="text-2xl font-semibold">
                    {art.sections[4].heading}
                  </h2>
                )}
                {art.sections[4]?.description && (
                  <div className="my-4">{art.sections[4].description}</div>
                )}
              </>
            )
          }
          

 
          {/* ASSOCIATED COSTS */}
          {art?.sections?.[5] && (
            <>
              {art.sections[5]?.heading && (
                <h2 className="text-2xl font-semibold">
                  {art.sections[5].heading}
                </h2>
              )}
              {art.sections[5]?.description && (
                <div className="my-4">{art.sections[5].description}</div>
              )}
              <ol className="ol-large">
                {art.sections[5]?.sections?.map((section, index) => (
                  <li key={index} className="my-3" >
                    {section?.title && <h3 className="text-lg font-semibold">{section.title}</h3>}
                    
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
              {art.sections[5]?.totalCost?.title && (
                <h2 className="text-2xl font-semibold my-3">
                  {art.sections[5].totalCost.title}
                </h2>
              )}
              {art.sections[5]?.totalCost?.desc && (
                <div>{art.sections[5].totalCost.desc}</div>
              )}
              </>
            )}
            <br/>
         
          {/* TRUSTED PARTNER */}
          {art?.sections?.[6] && (
            <>
              {art.sections[6]?.heading && (
                <h2 className="text-2xl font-semibold">
                  {art.sections[6].heading}
                </h2>
              )}
              {art.sections[6]?.content && <div className="my-4">{art.sections[6].content}</div>}
             
            </>
          )}

     
{/* WHY CHOOSE CLINIKK */}
{art?.sections?.[7] && (
  <>
    {art?.sections?.[7].heading && (
      <h2 className="text-2xl font-semibold">
        {art?.sections?.[7].heading}
      </h2>
    )}
    <ul className="my-4">
      {art?.sections?.[7].content.map((item, index) => (
        <li key={index}>
          <h3 className="text-lg font-semibold">{item.point}</h3>
          <p>{item.desc}</p>
        </li>
      ))}
    </ul>
  </>
)}

          {/* CHOOSING THE RIGHT HEALTHCARE FACILITY */}
        {art?.sections?.[8] && (
  <>
    {art.sections[8]?.heading && (
      <h2 className="text-2xl font-semibold">
        {art.sections[8].heading}
      </h2>
    )}
    <div className="my-4">
      <ol className="ol-small">
        {art.sections[8]?.content?.map((item, index) => (
          <li key={index}>
            <h3 className="text-lg font-semibold">{item.point}</h3>
            <p>{item.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </>
)}

          {/* PREVENTIVE MEASURES */}

          <div className="preventive-measures">
            {art.sections[9]?.heading && (
              <h2 className="text-2xl font-semibold ">
                {art.sections[9].heading}
              </h2>
            )}
            {art.sections[9]?.description && (
              <p>
                {art.sections[9].description}
              </p>
            )}
         
            <ol>
              {art.sections[9].content?.map((item, index) => (
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
          {art?.sections?.[10] && (
            <>
              {art.sections[10]?.heading && (
                <h2 className="text-2xl font-semibold my-2">
                  {art.sections[10].heading}
                </h2>
              )}
              {art.sections[10]?.content &&  <div dangerouslySetInnerHTML={{ __html: art.sections[10].content} } ></div>}
            </>
          )}
         <div className="mt-6">
        <Form/>
        </div>
        </div>

      

        <div className="mb-6 m-1">
        <div className="font-bold p-4 text-3xl md:my-12 my-2">
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
         <Form/>
       
      </div>
     
        
      </div>
    </>
  );
}

export default ArticleDetail;
