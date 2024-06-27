import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faChevronDown} from '@fortawesome/free-solid-svg-icons'


const Portfolio = () => {




    const [selectedValue, setSelectedValue] = useState("all");
    const [lastClickedBtn, setLastClickedBtn] = useState(null);
    const [isSelectActive, setIsSelectActive] = useState(false);
  
    const data = [

      { 
        id: 1, 
        category: "web development", 
        img: "src/assets/Screenshot 2024-06-16 180610.png",
        content: "Web Development",
        title: "finance"
     },

      { 
        id: 2,
        category: "web development",
        img: "src/assets/ABD72387-6C03-426E-BB37-9773357409B9.JPG", 
        content: "Web Development",
        title: "orizon"
     },

      { 
        id: 3, 
        category: "web development", 
        img: "src/assets/Screenshot 2024-06-16 180654.png", 
        content: "Web Development" ,
        title: "fundo"
    },

      {
        id: 4, 
        category: "application", 
        img: "src/assets/mobile.png", 
        content: "Application" ,
        title: "brawhalla"
    },

      {
         id: 5, 
        category: "web development", 
        img: "src/assets/desktop.png", 
        content: "Web Development" ,
        title: "dsm"
    },

      { 
        id: 6, 
        category: "web design", 
        img: "src/assets/433800436_18421977916015725_2399537827878237288_n.jpg", 
        content: "Web Design" ,
        title: "metaspark"
    },

      { 
        id: 7, 
        category: "web design", 
        img: "src/assets/430815918_773132618211775_2764906117747618135_n.jpg", 
        content: "Web Design" ,
        title: "summary"
    },

      { 
        id: 8, 
        category: "web design", 
        img: "src/assets/403531577_2331201500398158_5908179178304786142_n.jpg", 
        content: "Web Design" ,
        title:  "task manager"
    },

      { 
        id: 9, 
        category: "web design", 
        img: "src/assets/418771845_18406718254015725_8005164622772796732_n.jpg", 
        content: "Web Design",
        title: "arrival"
     },

    ];
  
    const categories = ["all", "web design", "web development", "application"];
  
    const handleSelectClick = () => {
      setIsSelectActive(!isSelectActive);
    };
  
    const handleSelectItemClick = (value) => {
      setSelectedValue(value.toLowerCase());
      setIsSelectActive(false);
      filterFunc(value.toLowerCase());
    };
  
    const handleFilterButtonClick = (value, btn) => {
      setSelectedValue(value.toLowerCase());
      filterFunc(value.toLowerCase());
      if (lastClickedBtn) {
        lastClickedBtn.classList.remove("active");
      }
      btn.classList.add("active");
      setLastClickedBtn(btn);
    };
  
    const filterFunc = (selectedValue) => {
      return data.filter((item) =>
        selectedValue === "all" ? true : item.category === selectedValue
      );
    };
  
    const filteredItems = filterFunc(selectedValue);
  

  return (
    <>


         <article className="portfolio" data-page="portfolio">

             <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">



      <ul className="filter-btn-container filter-list">

        {categories.map((category, index) => (  
            <li className="filter-item"> 
                          <button
            key={index}
            className={`filter-btn ${selectedValue === category.toLowerCase() ? "active" : ""}`}
            onClick={(e) => handleFilterButtonClick(category, e.target)}
            data-filter-btn
          >
            {category}
          </button>
            </li>

        ))}
      </ul>
      
      <div className='filter-select-box select ' >
        <button className={`filter-select select ${isSelectActive ? "active" : ""}`} onClick={handleSelectClick} data-select>
        <div className="select-value" data-select-value>{selectedValue}</div>
        <div className="select-icon">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      </button>
        <ul className={`select-list select-items ${isSelectActive ? "active" : ""}`}>
          {categories.map((category, index) => (
            <li
              key={index}
              className="select-item"
              onClick={() => handleSelectItemClick(category)}
            >
                        <button data-select-item>{category}</button>
            </li>
          ))}
        </ul>
      </div>

      <ul className="filter-items project-list">
        {filteredItems.map((item) => (

          <li key={item.id} className="filter-item project-item  active" data-filter-item data-category={item.category}>
            <a href="/">

            <figure className="project-img">

            <div className="project-item-icon-box">
          <FontAwesomeIcon icon={faEye} />
          </div>

            <img 
            src={item.img}
             alt="" 
             width="40"
             />
             </figure>
             <h3 className="project-title">{item.title}</h3>
             <p className="project-category">{item.content}</p>
            </a>
          </li>

        ))}
      </ul>

      </section>

      </article>
          
    </>
  )
}

export default Portfolio


