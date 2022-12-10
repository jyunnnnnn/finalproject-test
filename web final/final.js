
/*影片播放*/{
    var which;
    var back;
    function showprobability(){
        document.getElementById("select").innerHTML="";
        for(var i=0;i<Object.keys(probabilitylist).length;i++){
            document.getElementById("select").innerHTML+=`<div style="color:blue" onclick="probabilitychange(${i})" >${probabilityplay[i]}</div>`;
        } 
    }
    function probabilitychange(i){
        which=(Object.values(probabilitylist)[i]);
        play(which)
    }
    function showlinear(){
        document.getElementById("select").innerHTML="";
        for(var i=0;i<Object.keys(linearlist).length;i++){
            document.getElementById("select").innerHTML+=`<div style="color:blue" onclick="linearchange(${i})" >${linearplay[i]}</div>`;
        }
    }
    function linearchange(i){
        which=(Object.values(linearlist)[i]);
        play(which)
    }
    function showdiscrete(){
        document.getElementById("select").innerHTML="";
        for(var i=0;i<Object.keys(discretelist).length;i++){
            document.getElementById("select").innerHTML+=`<div style="color:blue" onclick="discretechange(${i})" >${discreteplay[i]}</div>`;
        }
    }
    function discretechange(i){
        which=(Object.values(discretelist)[i]);
        play(which)
    }
    function showditc(){
        document.getElementById("select").innerHTML="";
        for(var i=0;i<Object.keys(itclist).length;i++){
            document.getElementById("select").innerHTML+=`<div style="color:blue" onclick="itcchange(${i})" >${itcplay[i]}</div>`;
        }
    }
    function itcchange(i){
        which=(Object.values(itclist)[i]);
        play(which)
    }
    function showdcaculus(){
        document.getElementById("select").innerHTML="";
        for(var i=0;i<Object.keys(caculuslist).length;i++){
            document.getElementById("select").innerHTML+=`<div style="color:blue" onclick="caculuschange(${i})" >${caculusplay[i]}</div>`;
        }
    }
    function caculuschange(i){
        which=(Object.values(caculuslist)[i]);
        play(which)
    }
}

function select(){
    //document.getElementById("select").innerHTML=document.getElementById("toselect").value;
    if(document.getElementById("toselect").value==="probability"){
        showprobability();
        stoplay();
        back=document.getElementById("toselect").value;
        console.log(back)
    }
    else if(document.getElementById("toselect").value==="linear"){
        showlinear();
        stoplay()
    }
    else if(document.getElementById("toselect").value==="discrete"){
        showdiscrete();
        stoplay()
    }
    else if(document.getElementById("toselect").value==="itc"){
        showditc();
        stoplay()
    }
    else if(document.getElementById("toselect").value==="caculus"){
        showdcaculus();
        stoplay();
    }
    else{
        document.getElementById("select").innerHTML="";
        var randomarr=["b0cybhfNXl4","u0rgcWyuQbY","3IlQNqvzc2M"]
        which=randomarr[Math.floor(Math.random()*3)];
        play(which);
    } 
}
function stoplay(){
    var plpyvideo=document.getElementById("display");
    plpyvideo.innerHTML="";
}
function play(which){
    document.getElementById("select").innerHTML="";
    var plpyvideo=document.getElementById("display");
    plpyvideo.innerHTML=`<iframe width="840" height="472.5" src="https://www.youtube.com/embed/${which}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
function start(){
    foo=document.getElementById("123");
    foo.innerHTML="目前累積使用網站"+Math.floor(parseInt(localStorage.getItem("time"))/3600)+"小時"+Math.floor(parseInt(localStorage.getItem("time"))/60)+"分鐘"+parseInt(localStorage.getItem("time"))%60+"秒";
    select();
    document.getElementById("gotoback").addEventListener("click",select,false);
    /*document.getElementById("starttime").addEventListener("click",timerun,false);
    document.getElementById("starttime").addEventListener("click",stoptimerun,false);*/
} 
/*計時*/{
    var count=null;
    var seconds=0;
    function timerun(){
        if(count==null){
            if(parseInt(localStorage.getItem("time"))){
                seconds=localStorage.getItem("time");
                count=setInterval(update,1000);
                
            }
            else{
                localStorage.setItem("time",seconds);
                count=setInterval(update,1000);
            }
        }
    }
    function update(){
        seconds++;
        localStorage.setItem("time",seconds);
        foo=document.getElementById("123");
        numtime=parseInt(localStorage.getItem("time"))
        foo.innerHTML="目前累積使用網站"+Math.floor(numtime/3600)+"小時"+Math.floor(numtime/60)%60+"分鐘"+numtime%60+"秒";
        switch(Math.floor(numtime/3600)){
            case 0:
                $("#level").attr("src","sushi/11.png");
                $("#levelmsg").text("等級1")
                break;
            case 1:
                $("#level").attr("src","sushi/10.png");
                $("#levelmsg").text("等級2")
                break;
            case 2:
                $("#level").attr("src","sushi/09.png");
                $("#levelmsg").text("等級3")
                break;
            case 3:
                $("#level").attr("src","sushi/08.png");
                $("#levelmsg").text("等級4")
                break;
            case 4:
                $("#level").attr("src","sushi/07.png");
                $("#levelmsg").text("等級5")
                break;
            case 5:
                $("#level").attr("src","sushi/06.png");
                $("#levelmsg").text("等級6")
                break;
            case 6:
                $("#level").attr("src","sushi/05.png");
                $("#levelmsg").text("等級7")
                break;
            case 7:
                $("#level").attr("src","sushi/04.png");
                $("#levelmsg").text("等級8")
                break;
            case 8:
                $("#level").attr("src","sushi/03.png");
                $("#levelmsg").text("等級9")
                break;
            case 9:
                $("#level").attr("src","sushi/02.png");
                $("#levelmsg").text("等級10")
                break;
            case 10:
                $("#level").attr("src","sushi/01.png");
                $("#levelmsg").text("等級11")
                break;
            default:
                $("#level").attr("src","sushi/00.png");
                $("#levelmsg").text("等級12")
                break;                    
        }
    }
    function stoptimerun(){
        clearInterval(count);
        count=null;
    }
    
}
window.addEventListener("load",start,false);
let probabilityplay=[
    "機率第一章單元一：集合Set(1/2)",
    "機率第一章單元一：集合Set(2/2)",
    "機率第一章單元二：排列Permutation",
    "機率第一章單元三：組合Combinations(1/2)",
    "機率第一章單元三：組合Combinations(2/2)",
    "機率第二章單元一：概論(1/3)",
    "機率第二章單元一：概論(2/3)",
    "機率第二章單元一：概論(3/3)",
    "機率第三章單元一：隨機變數的概念(1/4)",
    "機率第三章單元一：隨機變數的概念(2/4)",
    "機率第三章單元一：隨機變數的概念(3/4)",
    "機率第三章單元一：隨機變數的概念(4/4)",
    "機率第三章單元二：累積分布函數(c.d.f)(1/4)",
    "機率第三章單元二：累積分布函數(c.d.f)(2/4)",
    "機率第三章單元二：累積分布函數(c.d.f)(3/4)",
    "機率第三章單元二：累積分布函數(c.d.f)(4/4)",
    "機率第三章單元三：期望值(Expected Value)與變異數(Variance)(1/3)",
    "機率第三章單元三：期望值(Expected Value)與變異數(Variance)(2/3)",
    "機率第三章單元三：期望值(Expected Value)與變異數(Variance)(3/3)",
    "機率第三章單元四：特徵函數與動差生成函數(1/4)",
    "機率第三章單元四：特徵函數與動差生成函數(2/4)",
    "機率第三章單元四：特徵函數與動差生成函數(3/4)",
    "機率第三章單元四：特徵函數與動差生成函數(4/4)",
    "機率第三章單元五：隨機變數的函數變換(1/4)",
    "機率第三章單元五：隨機變數的函數變換(2/4)",
    "機率第三章單元五：隨機變數的函數變換(3/4)",
    "機率第三章單元五：隨機變數的函數變換(4/4)",
    "機率第四章單元一：一維機率分配模型(1/10)",
    "機率第四章單元一：一維機率分配模型(2/10)",
    "機率第四章單元一：一維機率分配模型(3/10)",
    "機率第四章單元一：一維機率分配模型(4/10)",
    "機率第四章單元一：一維機率分配模型(5/10)",
    "機率第四章單元一：一維機率分配模型(6/10)",
    "機率第四章單元一：一維機率分配模型(7/10)",
    "機率第四章單元一：一維機率分配模型(8/10)",
    "機率第四章單元一：一維機率分配模型(9/10)",
    "機率第四章單元一：一維機率分配模型(10/10)",
    "機率第四章單元二：連續型機率分配(1/10)",
    "機率第四章單元二：連續型機率分配(2/10)",
    "機率第四章單元二：連續型機率分配(3/10)",
    "機率第四章單元二：連續型機率分配(4/10)",
    "機率第四章單元二：連續型機率分配(5/10)",
    "機率第四章單元二：連續型機率分配(6/10)",
    "機率第四章單元二：連續型機率分配(7/10)",
    "機率第四章單元二：連續型機率分配(8/10)",
    "機率第四章單元二：連續型機率分配(9/10)",
    "機率第四章單元二：連續型機率分配(10/10)",
    "機率第五章單元一：聯合機率分配與邊際分配函數(1)",
    "機率第五章單元一：聯合機率分配與邊際分配函數(2)",]
    let linearplay=[
    "線性代數第一章單元一：矩陣定義與基本運算(1/2)",
    "線性代數第一章單元一：矩陣定義與基本運算(2/2)",
    "線性代數第一章單元二：矩陣的列（行)運算與行列式(1/6)",
    "線性代數第一章單元二：矩陣的列（行)運算與行列式(2/6)",
    "線性代數第一章單元二：矩陣的列（行)運算與行列式(3/6)",
    "線性代數第一章單元二：矩陣的列（行)運算與行列式(4/6)",
    "線性代數第一章單元二：矩陣的列（行)運算與行列式(5/6)",
    "線性代數第一章單元二：矩陣的列（行)運算與行列式(6/6)",
    "線性代數第一章單元三：線性聯立方程組的解(1/3)",
    "線性代數第一章單元三：線性聯立方程組的解(2/3)",
    "線性代數第一章單元三：線性聯立方程組的解(3/3)",
    "線性代數第二章單元一：n維實數向量",
    "線性代數第二章單元二：一般向量空間",
    "線性代數第二章單元二：一般向量空間(111.04)",
    "線性代數第二章單元三：子空間(1)",
    "線性代數第三章單元一：矩陣轉換(1/2)",
    "線性代數第三章單元一：矩陣轉換(2/2)",
    "線性代數第三章單元二：一般線性變換(1)",
    "線性代數第三章單元二：一般線性變換(2)",
    "線性代數第三章單元二：一般線性變換(3)",
    "線性代數第三章單元三：線性變換的矩陣表示式(1/5)",
    "線性代數第三章單元三：線性變換的矩陣表示式(2/5)",
    "線性代數第三章單元三：線性變換的矩陣表示式(3/5)",
    "線性代數第三章單元三：線性變換的矩陣表示式(4/5)",
    "線性代數第三章單元三：線性變換的矩陣表示式(5/5)",
    "線性代數第二章單元三：子空間(2)",
    "線性代數第二章單元三：子空間(3)",
    "線性代數第二章單元三：子空間(4)",
    "線性代數第二章單元三：子空間(5)",
    "線性代數第二章單元三：子空間(6)",
    "線性代數第二章單元四：向量空間的基底與維度(1)",
    "線性代數第二章單元四：向量空間的基底與維度(2)",
    "線性代數第二章單元四：向量空間的基底與維度(3)",
    "線性代數第二章單元四：向量空間的基底與維度(4)",
    "線性代數第三章單元二：一般線性變換(4)",
    "線性代數第四章單元一：矩陣的特徵值系統(1/2)",
    "線性代數第四章單元一：矩陣的特徵值系統(2/2)",
    "線性代數第四章單元二：矩陣對角化(1)"]
    let itcplay=[
    "[計算機概論] 第一講、Data Storage (1)",
    "[計算機概論] 第二講、Data Storage (2)",
    "[計算機概論] 第三講、Data Storage (3)",
    "[計算機概論] 第四講、Data Manipulation (1)",
    "[計算機概論] 第五講、Data Manipulation (2)",
    "[計算機概論] 第六講、Data Manipulation (3)",
    "[計算機概論] 第七講、Operating Systems",
    "[計算機概論] 第八講、Networking and the Internet (1)",
    "[計算機概論] 第九講、Networking and the Internet (2)",
    "[計算機概論] 第十講、Algorithms",
    "[計算機概論] 第十一講、Algorithms (2)",
    "[計算機概論] 第十二講、Programming Languages (1)",
    "[計算機概論] 第十三講、Programming Languages (2)",
    "[計算機概論] 第十四講、Data Abstractions (1)",
    "[計算機概論] 第十五講、Data Abstractions (2)",
    "[計算機概論] 第十六講、Data Abstractions (3)",
    "[計算機概論] 第十七講、Database Systems",
    "[計算機概論] 第十八講、Computer 3D Graphics",
    "[計算機概論] 第十九講、Artificial Intelligence (1)",
    "[計算機概論] 第二十講、Artificial Intelligence (2)",
    "[計算機概論] 第二十一講、Theory of Computation"]
    let caculusplay=[
    "Lec01 莊重老師真心告白",
    "Lec02 微積分(一)-103學年度 課程介紹",
    "Lec03 微積分(一)-103學年度 1.5 Exponential Functions~1.6 Inverse Functions and Logarithms",
    "Lec04 微積分(一)-103學年度 2.2 The Limit of a Function ~2.3 Calculating Limits Using the Limit Laws",
    "Lec05 微積分(一)-103學年度 2.4 The Precise Definition of a Limit",
    "Lec06 微積分(一)-103學年度 2.5 Continuity",
    "Lec07 微積分(一)-103學年度 2.6 Limits at Infinity; Horizontal Asymptotes",
    "Lec08 微積分(一)-103學年度 2.7 Derivatives and Rates of Change(本影片內容有部分錯誤，詳見留言)",
    "Lec09 微積分(一)-103學年度 2.8 The Derivative as a Function",
    "Lec10 微積分(一)-103學年度 3.1 Derivatives of Polynomials and Exponential Functions",
    "Lec11 微積分(一)-103學年度 3.2 The Product and Quotient Rules",
    "Lec12 微積分(一)-103學年度 3.3 Derivatives of Trigonometric Functions",
    "Lec13 微積分(一)-103學年度 3.4 The Chain Rule",
    "Lec14 微積分(一)-103學年度 3.5 Implicit Differentiation",
    "Lec15 微積分(一)-103學年度 3.6 Derivatives of Logarithmic Functions",
    "Lec16 微積分(一)-103學年度 3.9 Related Rates",
    "Lec17 微積分(一)-103學年度 3.10 Linear Approximations and Differentials",
    "Lec18 微積分(一)-103學年度 4.1 Maximum and Minimum Values",
    "Lec19 微積分(一)-103學年度 4.2 The Mean Value Theorem",
    "Lec20 微積分(一)-103學年度 4.3 How Derivatives Affect the Shape of a Graph~4.5 Summary of Curve Sketching",
    "Lec21 微積分(一)-103學年度 4.4 Indeterminate Forms and L’Hospital’s Rule",
    "Lec22 微積分(一)-103學年度 4.7 Optimization Problems",
    "Lec23 微積分(一)-103學年度 4.9 Antiderivatives",
    "Lec24 微積分(一)-103學年度 5.1 Areas and Distances",
    "Lec25 微積分(一)-103學年度 5.2 The Definite Integral",
    "Lec26 微積分(一)-103學年度 5.3 The Fundamental Theorem of Calculus",
    "Lec27 微積分(一)-103學年度 5.4 Indefinite Integrals and the Net Change Theorem",
    "Lec28 微積分(一)-103學年度 5.5 The Substitution Rule",
    "Lec29 微積分(一)-103學年度 6.1 Areas between Curves",
    "Lec30 微積分(一)-103學年度 6.2 Volumes ~6.3 Volumes by Cylindrical Shells",
    "Lec31 微積分(一)-103學年度 6.5 Average Value of a Function",
    "Lec32 微積分(一)-103學年度 7.1 Integration by Parts",
    "Lec33 微積分(一)-103學年度 7.2 Trigonometric Integrals",
    "Lec34 微積分(一)-103學年度 7.3 Trigonometric Substitution",
    "Lec35 微積分(一)-103學年度 7.4 Integration of Rational Functions by Partial Fractions",
    "Lec36 微積分(一)-103學年度 7.7 Approximate Integration",
    "Lec37 微積分(一)-103學年度 7.8 Improper Integrals",
    "Lec38 微積分(一)-103學年度 8.1 Arc Length",
    "Lec39 微積分(一)-103學年度 8.2 Area of a Surface of Revolution",
    "Lec40 微積分(一)-103學年度 8.5 Probability",
    "Lec41 微積分(一)-103學年度 10.1 Curves Defined by Parametric Equations",
    "Lec42 微積分(一)-103學年度 10.2 Calculus with Parametric Curves"]
    let discreteplay=[
    "Lec01 離散數學 Logic and Proofs (1/5)","Lec02 離散數學 Logic and Proofs (2/5)",
    "Lec03 離散數學 Logic and Proofs (3/5)",
    "Lec04 離散數學 Logic and Proofs (4/5)",
    "Lec05 離散數學 Logic and Proofs (5/5) Sets, Functions, Sequences, and Sums (1/3)",
    "Lec06 離散數學 Sets, Functions, Sequences, and Sums (2/3)",
    "Lec07 離散數學 Sets, Functions, Sequences, and Sums (3/3)",
    "Lec08 離散數學 Algorithms and the Integers (1/4)",
    "Lec09 離散數學 Algorithms and the Integers (2/4)",
    "Lec10 離散數學 Algorithms and the Integers (3/4)",
    "Lec11 離散數學 Algorithms and the Integers (4/4) Induction and Recur (¼)",
    "Lec12 離散數學 Induction and Recur (2/4)",
    "Lec13 離散數學 Induction and Recur (3/4)",
    "Lec14 離散數學 Induction and Recur (4/4) Counting (½)",
    "Lec15 離散數學 Counting (2/2)",
    "Lec16 離散數學 Advanced Counting Techniques (¼)",
    "Lec17 離散數學 Advanced Counting Techniques (2/4)",
    "Lec18 離散數學 Advanced Counting Techniques (3/4)",
    "Lec19 離散數學 Advanced Counting Techniques (4/4) Relations (¼)",
    "Lec20 離散數學 Relations (2/4)",
    "Lec21 離散數學 Relations (3/4)",
    "Lec22 離散數學 Relations (4/4) Graphs(1/3)",
    "Lec23 離散數學 Graphs(2/3)",
    "Lec24 離散數學 Graphs(3/3)",]
    let probabilitylist={
        " probaility_1_1":"umzy8FsgORg",
        " probaility_1_2":"y2qnH84ri_Q",	
        " probaility_1_3":"5Ha547ThXgk",	
        " probaility_1_4":"Np9D2ba0jDM",	
        " probaility_1_5":"riUPseK7K1o",	
        " probaility_2_1":"ghqrOpSZcJs",	
        " probaility_2_2":"V8IpjWhzpVM",	
        " probaility_2_3":"M7nZggLe1qA",	
        " probaility_3_1":"HHV2m4HgllQ",	
        " probaility_3_2":"R0ttvk51erY",	
        " probaility_3_3":"GhSksdNJJUk",	
        " probaility_3_4":"hIhmIXMugrE",	
        " probaility_3_5":"R00aJ5rxFAg",	
        " probaility_3_6":"n65RELCo_5Q",	
        " probaility_3_7":"QYhYtxApipA",	
        " probaility_3_8":"43lI9M0gj5I",	
        " probaility_3_9":"4j6156urTdM",	
        " probaility_3_10":"Zy0jd_EIles",	
        " probaility_3_11":"NZaAho9stOc",
        " probaility_3_12":"M8XILMl4EiU",
        " probaility_3_13":"X-E7ZgTLXOo",
        " probaility_3_14":"7m1oIllnTbw",
        " probaility_3_15":"v3OyF3vBCVQ",
        " probaility_3_16":"r8-99YGMWgI",
        " probaility_3_17":"MYUXneDNaLY",
        " probaility_3_18":"Fp9bRrIti3g",
        " probaility_3_19":"2PceMaRwEvQ",
        " probaility_4_1":"gr5Al0gJU9I",
        " probaility_4_2":"mSlzathM-9c",
        " probaility_4_3":"yvo7aKftd2o",
        " probaility_4_4":"TBNsddaq9zI",
        " probaility_4_5":"JyVWNyCH4RY",
        " probaility_4_6":"kMYwDSYXqaE",
        " probaility_4_7":"P96N0VzpH0",
        " probaility_4_8":"HCHtUPDqyPU",	
        " probaility_4_9":"JLPvtYCNqs",
        " probaility_4_10":"t3rKpwUuAWA",	
        " probaility_4_11":"9rSaw9xx6bE",
        " probaility_4_12":"tNNOhsmtsTk",
        " probaility_4_13":"vMkTzYTt9Ko",
        " probaility_4_14":"STLvAwV4gBU",
        " probaility_4_15":"QRkMAPFBPnM",
        " probaility_4_16":"pshU1UzGGVY",
        " probaility_4_17":"v122rsElE7Y",
        " probaility_4_18":"RnKHBMubiqk",
        " probaility_4_19":"ctXI2D8T8Y0",
        " probaility_4_20":"W9TGAF5zUM8",
        " probaility_5_1":"Fp2TGQc4P4w",
        " probaility_5_2":"JPh2-zE9lgY"}
    let linearlist={
        " linear_1":"c4183zJYRLc",
        " linear_2":"UZ6Ndd2zuPU",
        " linear_3":"CrMME_SEA9U",
        " linear_4":"_i-u-Szp41A",
        " linear_5":"NQ5PpCEO78w",
        " linear_6":"9sgA1mzcv9Q",
        " linear_7":"a_B23GSU6Wg",
        " linear_8":"nAstyXnze5k",
        " linear_9":"rndB-R8Fnns",
        " linear_10":"4Tdjb6WvNRE",	
        " linear_11":"of8mOdLKUwY",	
        " linear_12":"WvrYZYZzgjE",	
        " linear_13":"Op_MmbEcXvY",	
        " linear_14":"cVoRLXGOsgA",	
        " linear_15":"ZRB6cwyPOX8",	
        " linear_16":"fmlqODCHx3k",	
        " linear_17":"_z5aeC_huUQ",	
        " linear_18":"fz1F3-YIo6g",	
        " linear_19":"lcliAONea04",	
        " linear_20":"1J-Ym0Csi2k",	
        " linear_21":"X5zR-h03zcM",	
        " linear_22":"HTZlVXaQS48",	
        " linear_23":"qyleADKqwew",	
        " linear_24":"qoQRc5l8BlU",	
        " linear_25":"tlgJmw2kkM8",	
        " linear_26":"L9BvKsAjXrA",	
        " linear_27":"YxlbuLA0nrc",	
        " linear_28":"XlYFof70Cw8",	
        " linear_29":"BbicDVa4FWo",	
        " linear_30":"SQEcrXU40ao",	
        " linear_31":"QYoWUo6zDCg",	
        " linear_32":"uA5JQhBtRxg",	
        " linear_33":"FukgKiommm0",	
        " linear_34":"7z5H6rHEZUc",	
        " linear_35":"-OTwPS0ucOU",	
        " linear_36":"LFPmKe3WYiU",	
        " linear_37":"2wHDZw8B9iA",	
        " linear_38":"mg7ugDMR4wM"}
    let itclist={
        " itc_1":"EDYjPpn1OmE",
        " itc_2":"0sNoGFvfmyg",
        " itc_3":"sL9LlTtDLeQ",
        " itc_4":"XkptnZWDF2o",
        " itc_5":"oTrhNw5tAz8",
        " itc_6":"RkbrXMljEZU",
        " itc_7":"URpr8Tq8FyI",
        " itc_8":"VmEkpCZCiqc",
        " itc_9":"MoumhXZP0gA",
        " itc_10":"hqJhPzaiUm8",
        " itc_11":"AlscQi4C-Vo",
        " itc_12":"-j2n0MSOb3c",
        " itc_13":"GUtYi1uOM8k",
        " itc_14":"Sb-MikTR8Ys",
        " itc_15":"QzO0rag6geA",
        " itc_16":"ksJKIlJgSqw",
        " itc_17":"kmEXn0jerDw",
        " itc_18":"QD4r4SMQMu4",
        " itc_19":"T7urPNJ74cM",
        " itc_20":"tA83NUDJA38",
        " itc_21":"bwki9vyHvV4"}
    let caculuslist={
        " calculus_1":"r4eMzMBEvP8",	
        " calculus_2":"zO-FXmQ0P84",	
        " calculus_3":"ov4pI6ZCUGI",	
        " calculus_4":"yRnoNynLES8",	
        " calculus_5":"S_xch-YieRY",	
        " calculus_6":"cU41V8tOh5E",	
        " calculus_7":"wyeS1e37ig4",	
        " calculus_8":"sQToCiq6TI0",	
        " calculus_9":"PupLz-unY9c",	
        " calculus_10":"0ZTgkab-Y7U",	
        " calculus_11":"YoItKixBDpM",	
        " calculus_12":"HsqaMqUeV-w",	
        " calculus_13":"xj8d1cAaJWA",	
        " calculus_14":"gjwuahP2OZI",	
        " calculus_15":"j8cJ4Kls6TY",	
        " calculus_16":"tXCasQOVEXY",	
        " calculus_17":"yalF-6TfT7Y",	
        " calculus_18":"NKA6sFJYgJA",	
        " calculus_19":"FHdWAwbntKM",	
        " calculus_20":"H3QP4V4LHvU",	
        " calculus_21":"0rVBNvXzdTg",	
        " calculus_22":"hoODDaoabqc",	
        " calculus_23":"Olh6uYHwtWA",	
        " calculus_24":"OU3EYV-bq4I",	
        " calculus_25":"8BuNxwRAwpo",	
        " calculus_26":"xdSuXiz1dgg",	
        " calculus_27":"AETbrLIMQVw",	
        " calculus_28":"n0iXNtaTYbk",	
        " calculus_29":"Y7I9eWjQn2s",	
        " calculus_30":"uPtGcOS9w6A",	
        " calculus_31":"FzfGk0gf700",	
        " calculus_32":"CObECRlInIM",	
        " calculus_33":"6Kuby74zRmk",	
        " calculus_34":"SjFGu1Eb5fU",	
        " calculus_35":"AR814uvlO4Q",	
        " calculus_36":"oqwrC8tN6eI",	
        " calculus_37":"a2_NgfCu478",	
        " calculus_38":"0kL1scnwRY4",	
        " calculus_39":"wSZrROinTDM",	
        " calculus_40":"0h8kGuYL0Dw",	
        " calculus_41":"0nEC-IO2IHs",	
        " calculus_42":"k5pJ7OlcUTg"}
    let discretelist={
        " discrete_1":"klWl-t7V5qY",
        " discrete_2":"ih43BS7GsNY",
        " discrete_3":"_WXIdyyHfqk",
        " discrete_4":"qilMh8Uoabk",
        " discrete_5":"8_bLOJfZW6g",
        " discrete_6":"6U8lGu2pZyM",
        " discrete_7":"yR-nZxFS8Hk",
        " discrete_8":"wiVH6goGrWQ",
        " discrete_9":"a_iekTDu1xQ",
        " discrete_10":"ddMlBS2RYp4",
        " discrete_11":"IlMZbpJW1ek",
        " discrete_12":"R29RKSmZCnM",
        " discrete_13":"5QtHzN4SRZc",
        " discrete_14":"aLDHXK2M2yk",
        " discrete_15":"--gFe7gbFIQ",
        " discrete_16":"filS0k_GTvY",
        " discrete_17":"XjTuFEQMxE0",
        " discrete_18":"Tcc9mQDAX_4",
        " discrete_19":"DGYCglldsAY",
        " discrete_20":"CtxWiSNrxvI",
        " discrete_21":"ouXIBZTTtuk",
        " discrete_22":"q0Vy0gQCB_g",
        " discrete_23":"y4sLC9zeEvU",
        " discrete_24":"P2FRYshQ57s"}
