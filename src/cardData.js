import dermatis from '../public/dermatis.jpeg'
import fever from '../public/fever.jpeg'
import headache from  '../public/headache.jpeg'
import throat from  '../public/sorethroat.jpeg'
import body from  '../public/body.jpeg'
import back from  '../public/back.jpeg'
import joint from  '../public/Joint Pain Home.jpg'
import hypertension from '../public/hpertension.jpeg'
import dengue from '../public/Dengue Home-min.jpg'
import feve from '../public/Fever Cold Cough Home-min.jpg'
import derma2 from '../public/Dermatitis HOme-min.jpg'
import thyroid from '../public/thyroid 1.jpg'
import wound from '../public/Wound INfection  HOme-min.jpg'

const cardData = [

  {
    categoryName:"Chronic Diseases",
    type:[{
      id: 1,
      alt:"Doctor treating dengue patient ",
      title: 'Dengue',
      description:"Dengue fever is caused by the dengue virus (DENV), transmitted primarily by the Aedes aegypti mosquito. There are four distinct serotypes of the dengue virus: DENV-1, DENV-2, DENV-3, and DENV-4.",
      imageUrl: dengue,
      date: "Sunday, 1 Jan 2023",
    }, {
      id: 2,
      alt:"patient calculating diabetes level",
      title: 'Diabetes',
      description:"Diabetes is a chronic health condition characterized by elevated blood sugar levels (glucose) due to the body's inability to produce enough insulin. Insulin, produced by the pancreas, regulates glucose uptake into cells for energy.",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1714678708304-28971a973dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 12,
      alt:"Doctor checking blood pressure level",
      title: 'Hypertension',
      description:"Hypertension (high blood pressure) is a chronic medical condition where the force of blood against the walls of the arteries is elevated & can lead to serious health complication like stroke & kidney failure if left untreated.",
      imageUrl: hypertension,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 13,
      alt:"Thuroid Disorders",
      title: 'Thyroid Disorders',
      description:"Thyroid disorders encompass conditions affecting the thyroid gland, a small butterfly-shaped organ in the neck that produces hormones crucial for metabolism & various bodily functions. Symptoms include weight changes, fatigue, and changes in heart rate.",
      imageUrl: thyroid,
      date: "Sunday, 1 Jan 2023",
    },]
  }
,
  {
    categoryName:"Skin Conditions",
    type:[ {
      id: 6,
      alt:"Girl sneezing with Allergic Reactions",
      title: ' Allergic reactions',
      description:"Allergic reactions occur when the immune system overreacts to a normally harmless substance &amp; can lead to various symptoms ranging from mild to severe, including skin rash, itching, swelling, sneezing, wheezing, difficulty breathing.",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661537390414-33d7ad495159?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 7,
      alt:"Doctor and patient conversation about dermatitis issues ",
      title: 'Dermatitis',
      description:"Dermatitis refers to inflammation of the skin, which can result in a range of symptoms like redness, itching, swelling, & skin lesions. It is often caused by contact with irritants or allergens, but also be due to genetic factors, infections, or autoimmune conditions",
      imageUrl:derma2,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 8,
      alt:"Fungal Infections",
      title: ' Fungal Infections',
      description:"Fungal infections, are caused by fungi that invade the skin, nails, hair, or internal organs.These infections can range from mild, such as yeast infections to severe, such as systemic fungal infections affecting organs like lungs.",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1677545889722-423483ddd9f9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },]
  },

  {
    categoryName:"Acute Conditions",
    type:[ {
      id: 5,
      alt:"Doctor treating patient of Fever, Cold & Cough",
      title: ' Fever, Cold, Cough',
      description:"Fever is a temporary increase in body temperature, in response to infection. It's a common symptom that indicates the body's immune system is fighting off pathogens. Fever is a body temperature above 100.4°F (38°C) when taken orally.",
      imageUrl: feve,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 5,
      alt:"Boy feeling uncomfortable with sore throat",
      title: 'Sore throat',
      description:"Sore throat is a common condition marked by pain, scratchiness, or irritation of the throat. It is usually caused by viral infections like the common cold or flu, but can also result from bacterial infections such as strep throat.",
      imageUrl: throat,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 15,
      alt:"Boy suffering from headache",
      title: 'Headaches',
      description:"A headache is a common medical condition characterized by pain in the head or upper neck area. Headaches can be caused due to tension, migraines and by other conditions such as sinus infections, head injury, or medication side effects.",
      imageUrl:headache,
      date: "Sunday, 1 Jan 2023",
    },] 
  }
   ,
   {
    categoryName:"Pain Management",
    type:[ {
      id: 3,
      alt:"Old man sitting on a bench suffering from Joint Pain",
      title: ' Joint Pain',
      description:"Joint pain refers to discomfort, soreness, or inflammation in any of the body's joints, where two or more bones meet. It can vary in intensity, ranging from mild to severe, and may be acute (short-term) or chronic (long-lasting).",
      imageUrl: joint,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 3,
      alt:"Back Pain",
      title: ' Back Pain',
      description:" Back pain is a common condition characterized by discomfort, stiffness, or tension in the lower, middle, or upper back & can range from mild to severe  due to muscle strain, injury, poor posture, or underlying medical conditions.",
      imageUrl: back,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 22,
      alt:"Body Aches",
      title: 'Body Aches',
      description:"Body ache refers to discomfort that affects muscles, joints, or tissues throughout the body. It can be caused by factors like viral infections (flu or colds), bacterial infections, autoimmune disorders, overexertion, stress, dehydration.",
      imageUrl: body,
      date: "Sunday, 1 Jan 2023",
    },] 
  },
  {
    categoryName:"Infections",
    type:[ {
      id: 4,
      alt:"Viral infections",
      title: ' Viral infections',
      description:"Respiratory infections are increasingly common primarily due to rising pollution levels and changing weather conditions. Understanding the best treatments for respiratory issues and knowing where to find reliable care is essential.",
      imageUrl: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 51,
      alt:"Urinary Tract Infections (UTI)",
      title: 'Urinary Tract Infections (UTI)',
      description:"Urinary tract infection (UTI) is a bacterial infection that occur in the urinary system, includes kidneys, ureters, bladder & urethra. It occurs when bacteria from the digestive tract, E. coli, enter the urinary tract through the urethra.",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1702599099904-4f25f14b0471?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 52,
      alt:"Wound Infections.",
      title: ' Wound Infections.',
      description:"Wound infections occur when bacteria enter a wound, causing inflammation and potentially delaying healing. Common signs of wound infection include increased pain, redness, swelling, warmth around the wound, pus or discharge, and fever.",
      imageUrl: wound,
      date: "Sunday, 1 Jan 2023",
    },] 
  }
   
  ];
    
export default cardData;
