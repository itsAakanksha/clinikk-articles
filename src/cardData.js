import dermatis from '../public/dermatis.jpeg'
import fever from '../public/fever.jpeg'
import headache from  '../public/headache.jpeg'
import throat from  '../public/sorethroat.jpeg'
import body from  '../public/body.jpeg'
import back from  '../public/back.jpeg'
import joint from  '../public/joint.jpeg'
import hypertension from '../public/hpertension.jpeg'
import dengue from '../public/dengue.jpeg'

const cardData = [

  {
    categoryName:"Chronic Diseases",
    type:[{
      id: 1,
      title: 'Dengue',
      description:"Dengue fever is caused by the dengue virus (DENV), transmitted primarily by the Aedes aegypti mosquito. There are four distinct serotypes of the dengue virus: DENV-1, DENV-2, DENV-3, and DENV-4.",
      imageUrl: dengue,
      date: "Sunday, 1 Jan 2023",
    }, {
      id: 2,
      title: 'Diabetes',
      description:"Diabetes is a chronic health condition characterized by elevated blood sugar levels (glucose) due to the body's inability to produce enough insulin or to properly use insulin. Insulin, produced by the pancreas, regulates glucose uptake into cells for energy",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1714678708304-28971a973dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 12,
      title: 'Hypertension',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.  Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: hypertension,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 13,
      title: 'Thyroid Disorders',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla,  Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1663047254383-0e4d7aa779bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },]
  }
,
  {
    categoryName:"Skin Conditions we treat",
    type:[ {
      id: 6,
      title: ' Allergic reactions',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam. Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661537390414-33d7ad495159?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 7,
      title: 'Dermatitis',
      description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.   Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl:dermatis,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 8,
      title: ' Fungal Infections',
      description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.   Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1677545889722-423483ddd9f9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },]
  },

  {
    categoryName:"Acute Conditions",
    type:[ {
      id: 5,
      title: ' Fever',
      description:"Fever is a temporary increase in body temperature, usually in response to an infection or illness. It's a common symptom that indicates the body's immune system is fighting off pathogens. Fever is typically defined as a body temperature above 100.4°F (38°C) when taken orally.",
      imageUrl: fever,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 10,
      title: 'Sore throat',
      description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.   Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: throat,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 15,
      title: 'Headaches',
      description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.   Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl:headache,
      date: "Sunday, 1 Jan 2023",
    },] 
  }
   ,
   {
    categoryName:"Pain Management",
    type:[ {
      id: 3,
      title: ' Joint Pain',
      description:"Joint pain refers to discomfort, soreness, or inflammation in any of the body's joints, where two or more bones meet. It can vary in intensity, ranging from mild to severe, and may be acute (short-term) or chronic (long-lasting).",
      imageUrl: joint,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 21,
      title: ' Back Pain',
      description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.   Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: back,
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 22,
      title: 'Body Aches',
      description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.   Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: body,
      date: "Sunday, 1 Jan 2023",
    },] 
  },
  {
    categoryName:"Infections",
    type:[ {
      id: 4,
      title: ' Viral infections',
      description:"Respiratory infections are increasingly common primarily due to rising pollution levels and changing weather conditions. Understanding the best treatments for respiratory issues and knowing where to find reliable care is essential.",
      imageUrl: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 51,
      title: 'Urinary Tract Infections (UTI)',
      description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.   Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: 'https://plus.unsplash.com/premium_photo-1702599099904-4f25f14b0471?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },
    {
      id: 52,
      title: ' Wound Infections.',
      description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, delectus autem! Voluptates, porro aliquam incidunt laboriosam deleniti inventore molestiae aperiam ut autem nulla, minus veniam itaque? Atque mollitia excepturi aperiam.   Vel corporis, sapiente temporibus deserunt distinctio dolor aspernatur perferendis at eos repellat a commodi nemo veritatis molestiae ipsa fuga incidunt illum fugit aperiam? Commodi similique adipisci reiciendis quod a. Corrupti.",
      imageUrl: 'https://images.unsplash.com/photo-1579544758184-a8994eb607a4?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: "Sunday, 1 Jan 2023",
    },] 
  }
   
  ];
    
export default cardData;
