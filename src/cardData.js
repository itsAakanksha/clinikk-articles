const cardData = [
    {
      id: 1,
      date: "Sunday, 1 Jan 2023",
      title: "Lorem Ipsum is simply dummy text of the",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt architecto libero inventore quam. At dignissimos labore, iste ipsum adipisci dolor veritatis quo quae cum, nemo optio sint quidem ea!",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/b9f1/d799/fa4a835ea3c0e050be3d68f649b18127?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtdEZtLhoYzoB0Ea15DjcnpQZu224zVOyw36gQZQk7hYyySqJ4fzMJNUHv3au~-2dNEm4aRYS~mK-BWHsR0NS4o5aH81fKnZM6l6ZVVqPYyS1b~szu3cayksPX3-sBVaoUI30T3kTE-rzi~ZswgVcl~3Vba7JubcjLPSBSeONHC5NsiYr-IAEZfAh-QQZ7-lwcEhHJ10Rc6quvGwU6rc8IOrPHXZMxQY2U8JBGrIKlRIQMU~hophZVchJW8kYLOnpNA8uq-37E~c8bh6roEdLdgUXftDSVF7no7WT7yNgbcX5GFxpbbAL7NUt4FslfIj9N75Zj5Y4DrucccjxJSoKA__",
    },
    // Repeat the structure 19 more times with different id and date
  ];
  
  for (let i = 2; i <= 30; i++) {
    cardData.push({
      id: i,
      date: `Sunday, ${i} Jan 2023`,
      title: "Lorem Ipsum is simply dummy text of the",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt architecto libero inventore quam. At dignissimos labore, iste ipsum adipisci dolor veritatis quo quae cum, nemo optio sint quidem ea!",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/b9f1/d799/fa4a835ea3c0e050be3d68f649b18127?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtdEZtLhoYzoB0Ea15DjcnpQZu224zVOyw36gQZQk7hYyySqJ4fzMJNUHv3au~-2dNEm4aRYS~mK-BWHsR0NS4o5aH81fKnZM6l6ZVVqPYyS1b~szu3cayksPX3-sBVaoUI30T3kTE-rzi~ZswgVcl~3Vba7JubcjLPSBSeONHC5NsiYr-IAEZfAh-QQZ7-lwcEhHJ10Rc6quvGwU6rc8IOrPHXZMxQY2U8JBGrIKlRIQMU~hophZVchJW8kYLOnpNA8uq-37E~c8bh6roEdLdgUXftDSVF7no7WT7yNgbcX5GFxpbbAL7NUt4FslfIj9N75Zj5Y4DrucccjxJSoKA__",
    });
  }
  
  export default cardData;
  