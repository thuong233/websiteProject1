import React from "react";

const NewsText = () => {
  return (
    <div>
      <h1 className="text-darkBrown text-6xl font-serif ">News!!!</h1>
      <p className="text-darkBrown  ">
        Here we will have the News Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vero tempore quibusdam temporibus beatae dicta nisi
        excepturi dolore suscipit neque. Distinctio aut sapiente asperiores quas
        consectetur modi fuga laudantium consequatur inventore? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dignissimos officiis omnis,
        odio, nesciunt vel neque rem culpa molestias saepe exercitationem
        pariatur ad libero optio nemo amet maiores qui! Consectetur eligendi,
        accusantium repellat ut accusamus eos vero commodi, delectus amet iure
        repudiandae dolor ullam tenetur necessitatibus laudantium magni deleniti
        a quis!
      </p>
      <button className="border border-brown rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-brown transition-all duration-500 cursor-pointer md:self-start sm:self-center text-brown hover:text-white ">
        Check News
      </button>
    </div>
  );
};

export default NewsText;
