$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 150
        }, 1000, function() {
            window.location.hash = target;
        });
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});







/* 1....     background: linear-gradient(to top,#708090,#fd57bf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    2....    background: linear-gradient(to top,#6842f3,#eee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;  
      background-color: #fd57bf;
    color: #eee;  
    
    section{
    padding: 6rem 0;
}
a{
    text-decoration: none;
    color: #eee;
}
p{
    font-size: 1.8rem;
    font-weight: 300;
    text-align: justify;
}
img{
    width: 100%;
}


/* 

.boxx{
    background: rgba(16, 5, 27,0.2);
    padding:2rem;
    border-radius: 3rem;
    box-shadow: 0 5px 5px rgba(241, 102, 207, 0.05);
    color: white;
   word-spacing: 0.2rem;
   
}


*/








    
    
   

    /*   Media Query




@media screen and (max-width:768px) {
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100%;
        background: url("IMAGES/sitebg2.jpg") center fixed;
        background-size: cover;
    }
    .menu-toggler{
        position: absolute;
        top: 5rem;
        right: 5rem;
        width: 10rem;
        height: 9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        z-index: 1500;
        transition: transform 650ms ease ease-out;
    }
   
    
    .landing-text h1 {
        font-size: 15rem;
       
    }
    .landing-text h6 {
        font-size: 2.7rem;
    }
    .nav-list{
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    li {
        margin: 2rem 0;
    }
    .nav-link {
        font-size: 8rem;
    }
    .about .container {
        flex-direction: column;
    }
    .profile-img {
        margin: 0 0 10rem 0;
        width: 100%;
    }
    .about-heading h1 {
        font-size: 15rem;

        
    }
    .about-heading h6 {
        font-size: 5rem;
        
    }
    .section-heading h6 {
        font-size: 2rem;
    }
    .about-details .nav-list {
        flex-direction: initial;
    }
    .my-skills {
        margin-top: 10rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 2.5rem;
        text-align: center;
    }
    .icon-container {
        width: 7rem;
        height: 7rem;
    }
    .timeline ul {
        margin: 0 0 0 auto;
    }
    .timeline .date::before {
        left: -19rem;
    }
    .timeline .date::after {
        left: -5.9rem;
    }
}

@media screen and (max-width:600px) {
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100%;
        background: url("IMAGES/sitebg2.jpg") center fixed;
        background-size: cover;
    }
    .menu-toggler{
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 5rem;
        height: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        z-index: 1500;
        transition: transform 650ms ease ease-out;
    }
    
    .landing-text h1 {
        font-size: 8rem;
    }
    .landing-text h6 {
        font-size: 1.4rem;
    }
    .nav-list{
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .nav-link {
        font-size: 3.5rem;
    }
    .about .container {
        flex-direction: column;
    }
    .profile-img {
        margin: 0 0 7rem 0;
        width: 100%;
    }
    .about-heading h1 {
        font-size: 8rem;
        
    }
    .about-heading h6 {
        font-size: 2rem;
        
    }
   #nl a{
       padding: 1rem;
   }
    .portfolio-item {
        flex-direction: column;
    }
    .portfolio-img {
        margin: 0 0 2rem 0;
        width: 100%;
        order: 1;
       
    }
    .portfolio-description {
        margin: 0;
        order: 2;
    }
   
    .timeline p {
        font-size: 1.6rem;
    }
    .timeline .date::before {
        font-size: 1.4rem;
    }
    form {
        width: 100%;
    }
    .up {
        right: 2rem;
    }
}












    */





