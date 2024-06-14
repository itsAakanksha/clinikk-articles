import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function RecentArticles() {

  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/details')
  }
  return (
    <>
   <div>
    <div className="font-bold p-4 text-2xl">
    Recent Article Posts
    </div>
    
    <div className="lg:flex p-4 sm:gap-6 mx-auto ">
      <div className="w-[326px] md:w-full min-h-[456px] md:h-[456px] flex flex-col cursor-pointer  " onClick={handleClick}>
        <div className="h-[225px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/b9f1/d799/fa4a835ea3c0e050be3d68f649b18127?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtdEZtLhoYzoB0Ea15DjcnpQZu224zVOyw36gQZQk7hYyySqJ4fzMJNUHv3au~-2dNEm4aRYS~mK-BWHsR0NS4o5aH81fKnZM6l6ZVVqPYyS1b~szu3cayksPX3-sBVaoUI30T3kTE-rzi~ZswgVcl~3Vba7JubcjLPSBSeONHC5NsiYr-IAEZfAh-QQZ7-lwcEhHJ10Rc6quvGwU6rc8IOrPHXZMxQY2U8JBGrIKlRIQMU~hophZVchJW8kYLOnpNA8uq-37E~c8bh6roEdLdgUXftDSVF7no7WT7yNgbcX5GFxpbbAL7NUt4FslfIj9N75Zj5Y4DrucccjxJSoKA__"
            className="h-full w-full object-cover rounded-t-3xl"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-2 p-4 flex-grow ">
          <div className="primary-color font-semibold">Sunday, 1 Jan 2023</div>
          <h3 className="text-2xl font-semibold">
            Lorem Ipsum is simply dummy text of the
          </h3>
          <p className="text-[#667085] sm:line-clamp-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam deserunt architecto libero inventore quam.
            At dignissimos labore, iste ipsum adipisci dolor veritatis quo quae
            cum, nemo optio sint quidem ea!
          </p>
        </div>
      </div>


      <div className="md:h-full  md:w-full  gap-6   ">

        <div className=" md:w-full w-[326px]  flex flex-col md:flex-row gap-3 cursor-pointer  " onClick={handleClick}>
          <div className="h-[228px] w-full">
            <img
              src="https://s3-alpha-sig.figma.com/img/b9f1/d799/fa4a835ea3c0e050be3d68f649b18127?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtdEZtLhoYzoB0Ea15DjcnpQZu224zVOyw36gQZQk7hYyySqJ4fzMJNUHv3au~-2dNEm4aRYS~mK-BWHsR0NS4o5aH81fKnZM6l6ZVVqPYyS1b~szu3cayksPX3-sBVaoUI30T3kTE-rzi~ZswgVcl~3Vba7JubcjLPSBSeONHC5NsiYr-IAEZfAh-QQZ7-lwcEhHJ10Rc6quvGwU6rc8IOrPHXZMxQY2U8JBGrIKlRIQMU~hophZVchJW8kYLOnpNA8uq-37E~c8bh6roEdLdgUXftDSVF7no7WT7yNgbcX5GFxpbbAL7NUt4FslfIj9N75Zj5Y4DrucccjxJSoKA__"
              className="h-full w-full object-cover rounded-t-3xl"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 p-4 sm:w-full">
            <div className="primary-color font-semibold">
              Sunday, 1 Jan 2023
            </div>
            <h3 className="text-2xl font-semibold">
              Lorem Ipsum is simply dummy text of the
            </h3>
            <p className="text-[#667085] line-clamp-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam deserunt architecto libero inventore quam.
              At dignissimos labore, iste ipsum adipisci dolor veritatis quo
              quae cum, nemo optio sint quidem ea!
            </p>
          </div>
        </div>

        <div className=" md:w-full w-[326px]  flex flex-col md:flex-row gap-3 cursor-pointer " onClick={handleClick}>
          <div className="h-[228px] w-full">
            <img
              src="https://s3-alpha-sig.figma.com/img/b9f1/d799/fa4a835ea3c0e050be3d68f649b18127?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtdEZtLhoYzoB0Ea15DjcnpQZu224zVOyw36gQZQk7hYyySqJ4fzMJNUHv3au~-2dNEm4aRYS~mK-BWHsR0NS4o5aH81fKnZM6l6ZVVqPYyS1b~szu3cayksPX3-sBVaoUI30T3kTE-rzi~ZswgVcl~3Vba7JubcjLPSBSeONHC5NsiYr-IAEZfAh-QQZ7-lwcEhHJ10Rc6quvGwU6rc8IOrPHXZMxQY2U8JBGrIKlRIQMU~hophZVchJW8kYLOnpNA8uq-37E~c8bh6roEdLdgUXftDSVF7no7WT7yNgbcX5GFxpbbAL7NUt4FslfIj9N75Zj5Y4DrucccjxJSoKA__"
              className="h-full w-full object-cover rounded-t-3xl"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 p-4 sm:w-full ">
            <div className="primary-color font-semibold">
              Sunday, 1 Jan 2023
            </div>
            <h3 className="text-2xl font-semibold">
              Lorem Ipsum is simply dummy text of the
            </h3>
            <p className="text-[#667085] line-clamp-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam deserunt architecto libero inventore quam.
              At dignissimos labore, iste ipsum adipisci dolor veritatis quo
              quae cum, nemo optio sint quidem ea!
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default RecentArticles;
