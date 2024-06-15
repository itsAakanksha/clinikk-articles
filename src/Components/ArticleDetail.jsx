import React from "react";
import image from "../../public/Image.png";
import image2 from '../../public/Image (1).png'
import image3 from '../../public/Image (2).png'
import image4 from '../../public/Image (3).png'
import Card from "./Card";
import cardData from "../cardData.js";
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const {id} = useParams()
  const cardsArray = cardData.slice(0, 5);
  return (

    <>
    <div className="flex flex-col-reverse items-center lg:flex-row lg:items-start mt-4 lg:mt-8 ">
   
    <div>
    <div className="font-bold p-4 text-2xl md:my-12 my-6">
      All Article Posts
    </div>
    <div className='flex justify-evenly gap-y-6 flex-wrap'>
      {cardsArray.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  </div>

  
 
    <div className="article p-8">
      <div className="primary-color font-semibold">Sunday, {id} Jan 2023</div>
      <h3 className="text-2xl font-semibold my-8">
        Diabetes Management and Associated Costs in Bengaluru
      </h3>

      <img className="my-4" src={image} alt="" />
   

      <p>Managing diabetes effectively requires the expertise of a dedicated healthcare provider. In Bengaluru, Clinikk stands out as the leading choice for diabetes care, offering comprehensive services and personalized treatment plans. This guide provides detailed insights into diabetes management, associated costs, and why Clinikk is your best option for diabetes care in the cit</p>
      <br />

      <h4 className="text-xl font-semibold">Understanding Diabetes</h4>
      <div>
       <p className="my-2"> Diabetes is a chronic condition characterized by high blood sugar
       levels. It primarily includes three types:</p>
        <ul>
          <li>
            Type 1 Diabetes: An autoimmune disorder where the body attacks
            insulin-producing cells in the pancreas.
          </li>
          <li>
            Type 2 Diabetes: A condition where the body becomes resistant to
            insulin or doesn't produce enough insulin.
          </li>
          <li>
            Gestational Diabetes: Diabetes that develops during pregnancy and
            typically resolves after childbirth..
          </li>
        </ul>
      </div>
     <br />
      <h4 className="text-xl font-semibold">Symptoms of Diabetes</h4>
      <div>
        <ul>
          <li>
            Increased Thirst and Hunger: Constant thirst and hunger despite
            regular eating and drinking.
          </li>
          <li>
            Frequent Urination: Increased urination, particularly at night.
          </li>
          <li>
            Unexplained Weight Loss: Sudden weight loss without changes in diet
            or exercise
          </li>
          <li>Fatigue: Persistent tiredness and lack of energy.</li>
          <li>Blurred Vision: Vision changes due to high blood sugar levels</li>
          <li>Slow-Healing Wounds: Cuts and bruises that heal slowly</li>
        </ul>
      </div>

      <h4 className="text-xl font-semibold">Diagnosing Diabetes</h4>
      <div>
       <p className="my-4"> Accurate diagnosis is essential for effective diabetes management.
       Common diagnostic methods include:</p>
        <ul>
          <li>
            Fasting Blood Sugar Test: Measures blood glucose after fasting for
            at least 8 hours.
          </li>
          <li>
            HbA1c Test: Provides an average blood sugar level over the past 2-3
            months.
          </li>
          <li>
            Oral Glucose Tolerance Test (OGTT): Measures blood sugar before and
            after consuming a glucose-rich drink.
          </li>
          <li>
            Random Blood Sugar Test: Measures blood glucose at any time of the
            day without fasting
          </li>
        </ul>
      </div>

      <img className="my-4" src={image2} alt="" />
      <br />

      <h4 className="text-xl font-semibold">Effective Diabetes Management</h4>
      <div>
        Effective diabetes management involves a combination of medication,
        lifestyle changes, and regular monitoring. Here are the key components
        of diabetes management:
        <ol>
          <li>
            <p>
              <strong>Medications</strong>
            </p>
            <p>
              {" "}
              Medications are crucial for managing diabetes. These include:
            </p>
            <ul>
              <li>
                Insulin: Essential for Type 1 diabetes and sometimes used in
                Type 2 diabetes.
              </li>
              <li>
                Oral Medications: Such as metformin, sulfonylureas, and DPP-4
                inhibitors, which help control blood sugar levels
              </li>
              <li>
                Injectable Medications: GLP-1 receptor agonists that help
                regulate blood sugar.
              </li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Diet and Nutrition</strong>
            </p>
            <p>
              A balanced diet is vital for diabetes management. Key dietary
              recommendations include:
            </p>
            <ul>
              <li>
                Carbohydrate Counting: Managing carbohydrate intake to control
                blood sugar levels.
              </li>
              <li>
                Healthy Eating: Incorporating whole grains, vegetables, lean
                proteins, and healthy fats.
              </li>
              <li>
                Portion Control: Eating smaller, more frequent meals to maintain
                stable blood sugar levels.
              </li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Physical Activity</strong>
            </p>
            <p>
              Regular physical activity helps improve insulin sensitivity and
              manage blood sugar levels. Recommended activities include:
            </p>
            <ul>
              <li>Aerobic Exercise: Such as walking, cycling, and swimming.</li>
              <li>
                Strength Training: Using weights or resistance bands to build
                muscle.
              </li>
              <li>
                Flexibility Exercises: Yoga and stretching to improve overall
                well-being.
              </li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Monitoring Blood Sugar Levels</strong>
            </p>
            <p>
              Regular monitoring helps track blood sugar levels and adjust
              treatment plans as needed. Methods include:
            </p>
            <ul>
              <li>
                Self-Monitoring: Using a glucometer to check blood sugar levels
                at home.
              </li>
              <li>
                Continuous Glucose Monitoring (CGM): A device that provides
                real-time glucose readings.
              </li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Education and Support</strong>
            </p>
            <p>
              Patient education and support are critical for effective diabetes
              management. This includes:
            </p>
            <ul>
              <li>
                Diabetes Education Programs: Providing information on managing
                diabetes, diet, and exercise.
              </li>
              <li>
                Support Groups: Offering emotional support and sharing
                experiences with others living with diabetes.
              </li>
            </ul>
          </li>
        </ol>
      </div>
<br />
      <h4 className="text-xl font-semibold">
        Associated Costs of Diabetes Management in Bengaluru
      </h4>
      <div>
        The cost of diabetes management can vary depending on the type of
        diabetes, treatment plan, and healthcare facility. Here is a breakdown
        of potential costs
        <ol>
          <li>
            <p>
              <strong>Consultation Fees</strong>
            </p>
            <ul>
              <li>Initial Consultation: INR 500 - INR 2000</li>
              <li>Follow-up Visits: INR 300 - INR 1500</li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Diagnostic Tests</strong>
            </p>
            <ul>
              <li>Fasting Blood Sugar Test: INR 100 - INR 300</li>
              <li>HbA1c Test: INR 400 - INR 800</li>
              <li>OGTT: INR 500 - INR 1000</li>
              <li>Random Blood Sugar Test: INR 100 - INR 300</li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Medications</strong>
            </p>
            <ul>
              <li>Insulin: INR 500 - INR 3000 per month</li>
              <li>Oral Medications: INR 200 - INR 1500 per month</li>
              <li>Injectable Medications: INR 2000 - INR 8000 per month</li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Monitoring Devices</strong>
            </p>
            <ul>
              <li>Glucometer: INR 800 - INR 2000</li>
              <li>CGM Device: INR 4000 - INR 15,000</li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Diet and Lifestyle Programs</strong>
            </p>
            <ul>
              <li>Dietitian Consultation: INR 500 - INR 2000 per session</li>
              <li>Exercise Programs: INR 1000 - INR 5000 per month</li>
            </ul>
          </li>
        </ol>
      </div>

      <h4 className="text-xl font-semibold">
        Total Cost of Diabetes Management
      </h4>

      <div>
        The total cost of managing diabetes in Bengaluru can range from INR 2000
        to INR 50,000 or more per month, depending on the treatment plan and
        patient needs. It is essential to consider these costs when planning for
        diabetes management
      </div>

      <img className="my-4" src={image3} alt="" />
      <br />

      <h4 className="text-xl font-semibold">
        Clinikk: Trusted Partner in Diabetes Management
      </h4>
      <div>
        Clinikk has been at the forefront of providing high-quality diabetes
        care in Bengaluru. Currently managing diabetes for over 5000 patients,
        our experienced doctors ensure effective management and positive
        outcomes. Our clinics are well-equipped to handle diabetes cases,
        providing comprehensive care from diagnosis to ongoing management
      </div>

      <h4 className="text-xl font-semibold">
        Why Choose Clinikk for Diabetes Management?
      </h4>
      <ul>
        <li>
          Experienced Doctors: Our doctors have extensive experience in managing
          diabetes, ensuring you receive expert care. If you're searching for a
          "Diabetes Doctor in Bengaluru" or a "Sugar doctor near me," Clinikk is
          the right choice.
        </li>
        <li>
          State-of-the-Art Facilities: Our clinics are equipped with the latest
          medical technology for accurate diagnosis and effective treatment,
          making us one of the best diabetes clinics in Bengaluru.
        </li>
        <li>
          Patient-Centric Approach: We prioritise your health and well-being,
          offering personalised care tailored to your needs. Looking for a
          "Diabetes clinic near me"? - Clinikk should be your first choice.
        </li>
        <li>
          Affordable Care: We offer transparent and affordable pricing, ensuring
          you receive the best care without financial strain.
        </li>
        <li>
          Comprehensive Care: From initial diagnosis to ongoing management,
          Clinikk provides a full spectrum of services to manage diabetes
          effectively. For those seeking the "Best Sugar clinic near me,"
          Clinikk delivers top-notch services.
        </li>
      </ul>

      <img className="my-4" src={image4} alt="" />
      <br />

      <h4 className="text-xl font-semibold">
        Choosing the Right Healthcare Facility
      </h4>
      <div>
        When selecting a healthcare facility for diabetes management, consider
        the following factors:
        <ol>
          <li>
            <p>
              <strong>Experience and Expertise</strong>
            </p>
            <p>
              Choose a hospital or clinic with experienced healthcare
              professionals who specialize in managing diabetes. Facilities with
              a track record of successful diabetes management can provide
              better care.
            </p>
          </li>
          <li>
            <p>
              <strong>Facilities and Equipment</strong>
            </p>
            <p>
              Ensure the facility is well-equipped with necessary diagnostic
              tools, laboratory services, and diabetes education programs.
              Advanced equipment and infrastructure can significantly impact
              treatment outcomes.
            </p>
          </li>
          <li>
            <p>
              <strong>Cost and Insurance Coverage</strong>
            </p>
            <p>
              Consider the cost of treatment and whether the facility accepts
              your health insurance plan. Understanding the financial aspect of
              treatment can help in planning and managing expenses.
            </p>
          </li>
        </ol>
      </div>

      <h4 className="text-xl font-semibold">Conclusion</h4>
      <div>
        Diabetes is a chronic condition that requires ongoing care and
        management. With timely diagnosis, effective treatment, and supportive
        care, it can be managed successfully. Clinikk offers comprehensive
        diabetes care with experienced doctors, state-of-the-art facilities, and
        a patient-centric approach. By understanding the treatment process and
        associated costs, you can make informed decisions for yourself and your
        loved ones. Remember, consistent management and proper support are key
        to living well with diabetes.
      </div>
      <br />
      <div>
        For more information or to book an appointment, visit our website at
        clinikk.com or call us at [insert contact number]. Experience
        exceptional healthcare services at Clinikk – your trusted partner in
        health.
      </div>
    </div>

    </div>
    </>
  );
}

export default ArticleDetail;
