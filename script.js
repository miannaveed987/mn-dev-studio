document.getElementById("year").textContent = new Date().getFullYear();

const whatsappNumber = "923074644045";
const businessEmail = "mian.987.mn@gmail.com";

const message = "Assalam-o-Alaikum, I found MN Dev Studio and would like to discuss an app or website project.";

document.getElementById("whatsapp-link").href =
  "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

document.getElementById("email-link").href =
  "mailto:" + businessEmail +
  "?subject=" + encodeURIComponent("Project Inquiry - MN Dev Studio") +
  "&body=" + encodeURIComponent(message);
