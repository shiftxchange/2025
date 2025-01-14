// Generate Header
var header = document.createElement('header');
header.id = 'header';
header.className = 'fixed-top d-flex align-items-center ';
header.innerHTML = `
<div class="container d-flex align-items-center justify-content-between">
  <div class="logo">
    <a href="index.html" class="logo-link"><img src="assets/img/logo/white_logo.png" alt="" class="img-fluid">
      <img src="assets/img/logo/gray_logo.png" alt="" class="img-fluid hover-image"></a>
  </div>
  <nav id="navbar" class="navbar">
    <ul>
      <li><a class="nav-link scrollto" href="index.html">Home</a></li>
      <li class="dropdown"><a href="#"><span>Calls & Submission</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="abstracts.html">Call for Abstracts</a></li>
          <!--<li><a href="workshops.html">Call for workshops</a></li>--!>
          <li><a href="submission.html">Submission Information</a></li>
          <!--<li><a href="journals.html">Associated Journals</a></li>--!>
        </ul>
      </li>

      <li><a href="https://shiftxchange.github.io/2024/" target="_blank" rel="noopener noreferrer">Previous Edition (2024)</a></li>
      <li class="dropdown"><a href="#"><span>Venue</span> <i class="bi bi-chevron-down"></i></a>
        <ul>
          <li><a href="venue.html">Conference Venue</a></li>
          <li><a href="travel.html">Accommodation & Transport</a></li>
        </ul>
      </li>
      <li><a class="nav-link scrollto" href="committees.html">Committees</a></li>
    </ul>
    <i class="bi bi-list mobile-nav-toggle"></i>
  </nav>
</div>`;
document.body.insertBefore(header, document.body.firstChild);
