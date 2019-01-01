class APIF {
    static stop(){
        let blackhole = document.getElementById("blackhole");
        if(!blackhole)
            throw new Error("Your HTML document must contain a <div id=\"blackhole\">!");
        blackhole.style.opacity = "0";
        blackhole.style.zIndex = "1000000";
        function stopInner(){
            blackhole.style.opacity = (parseFloat(blackhole.style.opacity) + 0.03).toString();
            if(parseFloat(blackhole.style.opacity) > 1)
                blackhole.style.opacity = "1";
            else
                requestAnimationFrame(stopInner);
        }
        stopInner();
    }

    static start(){
        let blackhole = document.getElementById("blackhole");
        if(!blackhole)
            throw new Error("Your HTML document must contain a <div id=\"blackhole\">!");
        blackhole.style.opacity = "1";
        blackhole.style.zIndex = "1000000";
        function startInner(){
            blackhole.style.opacity = (parseFloat(blackhole.style.opacity) - 0.03).toString();
            if(parseFloat(blackhole.style.opacity) < 0)
                blackhole.style.opacity = "0";
            else
                requestAnimationFrame(startInner);
        }
        startInner();
        setTimeout(() => {blackhole.style.zIndex = "-1000000"}, 750);
    }

    static goto(htmlFile){
        location.replace(htmlFile);
    }
}