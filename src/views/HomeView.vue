<template>
  <div>
    <div class="home">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">गृह पृष्ठ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">सम्म्क्षित्त </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">तस्बिर </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">अन्तरवार्ता  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">लेख-रचना </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">सुजाब </a>
                </li>
              </ul>
            </div>
            <div class="icon">
              <div class="d-flex">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
              </div>
            </div>
        </nav>
      </div>
    </div>
    <!-- feature section -->
    <div >
      <div class="feature">
        <img src="../assets/background-img.png" style="objectFit:cover" width="100%" height="100%">
      </div>    
       
    </div>
    <!-- interview section -->
    <div class="py-5">
      <section class="interview">
        <div class="container">
          <h1>अन्तरवार्ता </h1>
         <div class="row ">
          <div class="col-md-4">
            <div class="card" >
              <img src="../assets/interview.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="../assets/interview.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="../assets/interview.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
         </div>
        </div>
      </section>
    </div>

    <!-- image section -->
    <div class="bg-light py-5">
      <h1>तस्बिर</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="../assets/gallery_n.jpg" class="gallery-img" >
          </div>
          <div class="col-md-4">
            <img src="../assets/gallery1.jpg" class="gallery-img" >
          </div>
          <div class="col-md-4">
            <img src="../assets/gallery2.jpg" class="gallery-img" >
          </div>
          <div class="col-md-4">
            <img src="../assets/gallery3.jpg" class="gallery-img" >
          </div>
          <div class="col-md-4">
            <img src="../assets/gallery4.jpg" class="gallery-img" >
          </div>
          <div class="col-md-4">
            <img src="../assets/gallery5.jpg" class="gallery-img" >
          </div>
        </div>
        <div class="read-btn">
          <button type="button" class="btn btn-danger">Read More...</button>
        </div>
      </div>
    </div>

    <!-- media coverage section -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>भिडियो</h1>
            <div class="row">
              <div class="col-md-6">
                <img src="../assets/gallery1.jpg" class="gallery-img">
              </div>
              <div class="col-md-6">
                <img src="../assets/gallery1.jpg" class="gallery-img" >
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <h1>कार्यक्रमहरु</h1>
            <div class="card w-75">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Button</a>
              </div>
            </div>
            <div class="card w-75">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer section -->
    <div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
             <ul class="personal-detail">
              <li>Muksamhang Menyangbo (Mukesh)</li>
              <li>Email :</li>
             </ul>
            </div>
            <div class="col-md-4">
              
              <ul class="personal-detail">
                <li>Contact (Mukesh)</li>
                <li>Phone : 9800000000</li>
               </ul>
             </div>
             <div class="col-md-4">
              <h5>Social link</h5>
              <div class="icon">
                <div class="d-flex">
                  <a href=""><i class="fa-brands fa-facebook"></i></a>
                  <a href=""><i class="fa-brands fa-twitter"></i></a>
                  <a href=""><i class="fa-brands fa-youtube"></i></a>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  
}
</script>
<style>
.logo{
  width: 100px;
}
.home{
  background-color: rgb(206, 9, 9);
}
h3{
  color: white;
  font-weight: bold;
}
.nav-item{
  padding-right: 50px;
  text-align: center;
}
.nav-link{
  color: white;
}
.fa-brands{
  color: white;
  padding: 10px;
}

.feature{
  width: 80%;
  height: 80vh;
 
}
h1{
  text-align: center;
  color: red;
  padding: 10px;
  font-weight: bold;
}
.gallery-img{
  width: 100%;
  height: 90%;
  padding: 10px;
}
.read-btn{
  text-align: center;
}
.card{
  align-items: center;
}
.footer{
  background-color: rgb(36, 35, 35);
  padding: 80px;
}
h6{
  color: white;
  padding: 10px;
  font-size: 20px;
}
h5{
  color: white;
}
.personal-detail{
  color: white;
  font-size: 20px;
  list-style: none;
}
</style>
