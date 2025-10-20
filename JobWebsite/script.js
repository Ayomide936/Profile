const resultsDiv = document.getElementById('results');
console.log("connect")
const userData = document.getElementById("userData");
const userLocation = document.getElementById("userLocation");
const btn = document.getElementById("btn");
const warnMessage = document.getElementById("warning");
const errorDiv = document.getElementById("error");

document.addEventListener("DOMContentLoaded", async () => {
  const url = `https://jsearch.p.rapidapi.com/search?query=developer&page=1&num_pages=1&country=nigeria&date_posted=all`;
  console.log("URL:", url);

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e7f11f8076msha84f747f44a72d5p12119djsncfdc256f1350',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(JSON.stringify(result, null, 2)); // inspect shape

    if (result.data && Array.isArray(result.data)) {
      const jobs = result.data;
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = ""; // clear old

      jobs.forEach(job => {
  // handle skills array
  let skills = "";
  if (job.job_required_skills && job.job_required_skills.length) {
    skills = job.job_required_skills.join(", ");
  }

  resultsDiv.textContent += `
    <div class="col-md-4">
      <div class="card mb-3 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${job.job_title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${job.employer_name} – ${job.job_city}</h6>
          <p class="card-text"><strong>Publisher:</strong> ${job.job_publisher || 'N/A'}</p>
          ${skills ? `<p class="card-text"><strong>Required skills:</strong> ${skills}</p>` : ""}
          <a href="${job.job_apply_link}" target="_blank" class="btn btn-primary">Apply Now</a>
        </div>
      </div>
    </div>
  `;
});

    } else {
      console.error("Unexpected API format", result);
    }
  } catch (error) {
    console.error(error);
  //  alert("error loading result")
    errorDiv.innerHTML = `an error occured while loading jobs <br> <i> pls  check internet connection </i>`;
  }
});










function getUserdata(data,userloc) {
    data = userData.value
   userloc = userLocation.value
   //console.log(data)        
    return [data,userloc]
   
}

async function getUserJob(userInput, userloca) {
  resultsDiv.innerHTML = ` <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>  `;
  [userInput, userloca] = getUserdata();
  console.log("userInput:", userInput, "userloca:", userloca);
  if (userInput === null || userloca === null || userInput === undefined || userloca === undefined || userInput === "" || userloca === "") {
      warnMessage.textContent = "pls enter a value"
  }
  else {
  warnMessage.textContent = ""
  let query = `${userInput} in ${userloca}`
  const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&country=${userloca}&date_posted=all`;
  console.log("URL:", url);

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e7f11f8076msha84f747f44a72d5p12119djsncfdc256f1350',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(JSON.stringify(result, null, 2)); // inspect shape
    console.log(result.data[0])
   if (result.data[0] === undefined || result.data[0] === '') {
       resultsDiv.textContent = `${userInput} job not available`;
       alert(`${userInput} job not available in ${userloca}`)
   }
   
    if (result.data && Array.isArray(result.data)) {
      const jobs = result.data;
      resultsDiv.innerHTML = ``; // clear old
      resultsDiv.classList.remove(".center")
      jobs.forEach(job => {
  // handle skills array
  let skills = "";
  if (job.job_required_skills && job.job_required_skills.length) {
    skills = job.job_required_skills.join(", ");
  }

  resultsDiv.innerHTML += `
    <div class="col-md-4 pt-3">
      <div class="card mb-3 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${job.job_title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${job.employer_name} – ${job.job_city}</h6>
          <p class="card-text"><strong>Publisher:</strong> ${job.job_publisher || 'N/A'}</p>
          ${skills ? `<p class="card-text"><strong>Required skills:</strong> ${skills}</p>` : ""}
          <a href="${job.job_apply_link}" target="_blank" class="btn btn-primary">Apply Now</a>
        </div>
      </div>
    </div>
  `;
});

    } else {
      console.error("Unexpected API format", result);
    }
  } catch (error) {
    console.error(error);
  //  alert("error loading result")
    errorDiv.innerHTML= `an error occured while loading <br> ${userData.value} jobs in ${userLocation.value} <br> <i> pls check internet connection<i>`;
  }
}
}