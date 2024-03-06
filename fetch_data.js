// Fetch data from JSON file biar ga perlu nulis tag tiap nambah data
async function fetchData() {
  try {
    // Replace 'data.json' with the path to your JSON file or use a variable array
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// render tampilannya

async function renderContentSkills(containerId, dataKey) {
  const container = document.getElementById(containerId);
  const data = await fetchData();

  if (container && data && data[dataKey]) {
    data[dataKey].forEach((item) => {
      const card = document.createElement("div");
      card.setAttribute("data-aos", "flip-up");
      card.setAttribute("data-aos-duration", "500");
      card.setAttribute("data-aos-delay", "100");
      card.setAttribute("data-aos-anchor-placement", "bottom-bottom");
      card.className =
        "card paper-drop bg-[#f0ebd1] lg:hover:rotate-[-1deg] transition duration-500 lg:px-4 py-6 outline-2 outline-offset-[4px] outline-dashed outline-white transition-all duration-500";

      const desc = document.createElement("div");
      desc.className = "desc flex flex-col";

      const title = document.createElement("h1");
      title.className = "text-xl font-bold text-start";
      title.textContent = item.title;

      const subtitle = document.createElement("h2");
      subtitle.className = "text-xl";
      subtitle.textContent = item.subtitle;

      const paragraph = document.createElement("p");
      paragraph.className = "text-start";
      paragraph.textContent = item.description;

      const tech = document.createElement("p");

      if (item.tech !== undefined && item.tech.trim() !== "") {
        tech.className = "text-start";
        tech.textContent = "Tech stack: " + item.tech;
      }

      const url = document.createElement("a");
      url.target = "_blank";

      if (item.url !== undefined && item.url.trim() !== "") {
        url.href = item.url;
        url.textContent = "Open";
        url.className =
          "text-xl font-bold text-[#4d4d4d] transition-all duration-500 px-4 border-2 border-[#4d4d4d] hover:border-[#df2e2e] hover:text-[#df2e2e]  mt-2 w-fit";
      } else {
        url.href = "";
      }

      desc.appendChild(title);
      desc.appendChild(subtitle);
      desc.appendChild(paragraph);
      desc.appendChild(tech);
      card.appendChild(desc);
      desc.appendChild(url);
      container.appendChild(card);
    });
  }
}

async function renderContentExperiencesEducations(containerId, dataKey) {
  const container = document.getElementById(containerId);
  const data = await fetchData();

  if (container && data && data[dataKey]) {
    data[dataKey].forEach((item) => {
      const div = document.createElement("div");
      // div.className = 'flex flex-col gap-1 my-3 pl-3 border-l-4 border-[#83B5B4]';
      div.className =
        "bg-[#f0ebd1] px-4 mx-2 my-3 lg:hover:rotate-[-1deg] transition duration-500 border-l-4 border-[#D57F5D] transition-all duration-500";
      div.setAttribute("data-aos", "fade-up");
      div.setAttribute("data-aos-duration", "1000");
      div.setAttribute("data-aos-delay", "200");
      div.setAttribute("data-aos-anchor-placement", "bottom-bottom");

      const title = document.createElement("h1");
      title.className = "text-2xl font-bold";
      title.textContent = item.title;

      const subtitle = document.createElement("h2");
      subtitle.className = "text-xl";
      subtitle.textContent = item.subtitle;

      const paragraph = document.createElement("p");
      paragraph.className = "text-l";
      paragraph.textContent = item.description;

      div.appendChild(title);
      div.appendChild(subtitle);
      div.appendChild(paragraph);
      container.appendChild(div);
    });
  }
}

window.onload = function () {
  renderContentSkills("skills-list", "skills");
  renderContentSkills("softskills-list", "softskills");
  renderContentExperiencesEducations("experiences-list", "experiences");
  renderContentExperiencesEducations("educations-list", "educations");
  renderContentSkills("certificates-list", "certificates");
  renderContentSkills("projects-list", "projects");
};
