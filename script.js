document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
[_{{{CITATION{{{_1{](https://github.com/Ahmad-Faqehi/tvtc-guides/tree/5dd9a63c85984b2d6703f2a8dbfea2dc01ebf9ba/includes%2Fhead.php)[_{{{CITATION{{{_2{](https://github.com/MuhammadHananAsghar/BirdFly---Chat-App-in-PHP/tree/1cf809e8141465c41fb8e04ba53de93ac6d2e5fa/BirdFly%2Fheader.php)[_{{{CITATION{{{_3{](https://github.com/ZBr14n/X1-Splash-Page/tree/fe021572307e464708e846bf196087b576adb60b/x1xpress_product_sheet.php)[_{{{CITATION{{{_4{](https://github.com/DucThuy2000/App_test/tree/2649f74393bc7aa905eabde4d96b920cfadf0261/resources%2Fviews%2Fenduser%2Flayout.blade.php)[_{{{CITATION{{{_5{](https://github.com/FadillaRatnaDwita29RPL/Web-Individu---Up-File/tree/746728793f40fa19f472f9e1fa66e283ca86bbf9/techcourse%2Fsignup.php)[_{{{CITATION{{{_6{](https://github.com/mistryaman/srms/tree/26a55567b77e040ded49e4977c2b457c1b37bfda/header.php)[_{{{CITATION{{{_7{](https://github.com/dsalguera/SIB-Manager/tree/cc027e6ba5a490c40a60c01412a0cbe4db4ac2b9/components%2Fnavigation.php)