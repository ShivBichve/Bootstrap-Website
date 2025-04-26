let primary_btn = document.querySelectorAll(".primary-btn");
let group = document.querySelectorAll(".group");
let hidden_text = document.querySelectorAll(".hidden-text");
let hidden_text_text = document.querySelectorAll(".hidden-text-text");
let bg_second_main = document.querySelectorAll(".bg-second-main");
let bg_second = document.querySelectorAll(".bg-second");
let bg_second_text = document.querySelectorAll(".bg-second-text");
let work = document.querySelectorAll(".work");
let work_img = document.querySelectorAll(".work-img");
let arrow = document.querySelector(".arrow");
let plan = document.querySelectorAll(".plan");
let plan_content = document.querySelectorAll(".plan-content");
let purchase_btn = document.querySelectorAll(".purchase-btn");
let latest_work_box = document.querySelectorAll(".latest-work-box");
let latest_work_img = document.querySelectorAll(".latest-work-img");
let work_pic_img = document.querySelectorAll(".work-pic-img");
let latest_work_content = document.querySelectorAll(".latest-work-content");
let latest_work_btn_a = document.querySelectorAll(".latest-work-btn-a");
let team_grp_social = document.querySelectorAll(".team-grp-social");
let team_member = document.querySelectorAll(".team-member");
let blogimage = document.querySelectorAll(".blog-image");
let blog_content = document.querySelectorAll(".blog-content");
let footer_content_text = document.querySelectorAll(".footer-content-text");
let form_btn = document.querySelector(".form-btn");
let read_more_text = document.querySelectorAll(".read-more-text");
let read_more_text1 = document.querySelectorAll(".read-more-text1");
let social_icon_a = document.querySelectorAll(".social-icon-a");
let preloader = document.querySelector("#preloader");
let load_text = document.querySelector(".load-text");

window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.style.transform = "translateY(-1500px) translateX(1500px) rotate(30deg)";
    }, 2000);
});

for(let i=0; i<social_icon_a.length; i++) {
    social_icon_a[i].addEventListener("mouseover", () => {
        social_icon_a[i].style.setProperty('--socialicona', 'scale(1)');
    });

    social_icon_a[i].addEventListener("mouseout", () => {
        social_icon_a[i].style.setProperty('--socialicona', 'scale(0)');
    });
}

form_btn.addEventListener("mouseover", () => {
    form_btn.style.setProperty('--formbtnX', 'none');
    form_btn.style.setProperty('--formbtnY', 'none');
});

form_btn.addEventListener("mouseout", () => {
    form_btn.style.setProperty('--formbtnX', '0');
    form_btn.style.setProperty('--formbtnY', '0');
});

for(let i=0; i<footer_content_text.length; i++) {
    footer_content_text[i].addEventListener("mouseover", () => {
        footer_content_text[i].style.marginLeft = "0px";
    });
    
    footer_content_text[i].addEventListener("mouseout", () => {
        footer_content_text[i].style.marginLeft = "-20px";
    });
}

for(let i=0; i<blog_content.length; i++) {
    blog_content[i].addEventListener("mouseover", () => {
        blogimage[i].style.setProperty('--blogimagewidth', '100%');
        blogimage[i].style.setProperty('--blogimageleft', '0%');
        blogimage[i].style.setProperty('--blogimageopacity', "0");
        read_more_text[i].style.marginLeft = "0px";
    });
    
    blog_content[i].addEventListener("mouseout", () => {
        blogimage[i].style.setProperty('--blogimagewidth', '0%');
        blogimage[i].style.setProperty('--blogimageleft', '50%');
        blogimage[i].style.setProperty('--blogimageopacity', "1");
        read_more_text[i].style.marginLeft = "-80px";
    });
}

for(let i=0; i<team_member.length; i++) {
    team_member[i].addEventListener("mouseover", () => {
        team_grp_social[i].style.top = "6%";
    });
    
    team_member[i].addEventListener("mouseout", () => {
        team_grp_social[i].style.top = "-50%";
    });
}

for(let i=0; i<latest_work_box.length; i++) {
    latest_work_box[i].addEventListener("mouseover", () => {
        latest_work_content[i].style.left = "20px";
        latest_work_content[i].style.bottom = "20px";
        latest_work_btn_a[i].style.left = "50%";
        latest_work_btn_a[i].style.opacity = "1";
        latest_work_img[i].style.setProperty('--latestworkimgheight', '100%');
        work_pic_img[i].style.filter = "grayscale(1)";
    });
    
    latest_work_box[i].addEventListener("mouseout", () => {
        latest_work_content[i].style.left = "0px";
        latest_work_content[i].style.bottom = "-100%";
        latest_work_btn_a[i].style.left = "0";
        latest_work_btn_a[i].style.opacity = "0";
        latest_work_img[i].style.setProperty('--latestworkimgheight', '0px');
        work_pic_img[i].style.filter = "grayscale(0)";
    });
}

for(let i=0; i<plan.length; i++) {
    plan[i].addEventListener("mouseover", () => {
        plan_content[i].style.setProperty('--plancontentX', 'none');
        plan_content[i].style.setProperty('--plancontentY', 'none');
        plan[i].style.setProperty('--planheight', '100%');
        purchase_btn[i].style.setProperty('--purchasebtnX', 'none');
        purchase_btn[i].style.setProperty('--purchasebtnY', 'none');
    });

    plan[i].addEventListener("mouseout", () => {
        plan_content[i].style.setProperty('--plancontentX', '0');
        plan_content[i].style.setProperty('--plancontentY', '0');
        plan[i].style.setProperty('--planheight', '0px');
        purchase_btn[i].style.setProperty('--purchasebtnX', '0');
        purchase_btn[i].style.setProperty('--purchasebtnY', '0');
    });
}

arrow.addEventListener("mouseover", () => {
    arrow.style.setProperty('--arrowscaleX', 'none');
    arrow.style.setProperty('--arrowscaleY', 'none');
});

arrow.addEventListener("mouseout", () => {
    arrow.style.setProperty('--arrowscaleX', '0');
    arrow.style.setProperty('--arrowscaleY', '0');
});

for(let i=0; i<work.length; i++) {
    work[i].addEventListener("mouseover", () => {
        work_img[i].style.setProperty('--workimgX', 'none');
        work_img[i].style.setProperty('--workimgY', 'none');
    });

    work[i].addEventListener("mouseout", () => {
        work_img[i].style.setProperty('--workimgX', '0');
        work_img[i].style.setProperty('--workimgY', '0');
    });
}

for(let i=0; i<bg_second_main.length; i++) {
    bg_second_main[i].addEventListener("mouseover", () => {
        bg_second[i].style.setProperty('--bg-second-height', '290px');
        bg_second_text[i].style.setProperty('--bgsecondtextheight', '100%');
        read_more_text1[i].style.marginLeft = "0px";
    });

    bg_second_main[i].addEventListener("mouseout", () => {
        bg_second[i].style.setProperty('--bg-second-height', '0px');
        bg_second_text[i].style.setProperty('--bgsecondtextheight', '0px');
        read_more_text1[i].style.marginLeft = "-80px";
    });
}

for (let i = 0; i < group.length; i++) {
    group[i].addEventListener("mouseover", () => {
        hidden_text[i].style.setProperty('--height', '25px');
        hidden_text[i].style.setProperty('--scaleX', 'none');
        hidden_text[i].style.setProperty('--scaleY', 'none');
        hidden_text_text[i].style.transform = "translateY(25px)";
    });

    group[i].addEventListener("mouseout", () => {
        hidden_text[i].style.setProperty('--height', '0px');
        hidden_text[i].style.setProperty('--scaleX', '0');
        hidden_text[i].style.setProperty('--scaleY', '0');
        hidden_text_text[i].style.transform = "translateY(0px)";
    });
}

for (let i = 0; i < primary_btn.length; i++) {
    primary_btn[i].addEventListener("mouseover", () => {
        primary_btn[i].style.setProperty('--afterBack', '115%');
    });

    primary_btn[i].addEventListener("mouseout", () => {
        primary_btn[i].style.setProperty('--afterBack', '0%');
    });
}
