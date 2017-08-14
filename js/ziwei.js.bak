/*紫微斗數 Chinese Astrology Zi Wei Dou Shu*/
var ziwei = {
	y:null,	m:null,	d:null,	h:null,	g:null,	l:null,	b:null,	f:null,	s4:null,	z:null,
	y1Pos:null,	y2Pos:null,	hPos:null,	lPos:null,	bPos:null,	zPos:null,
	getNowDate:function(){
		var Today=new Date();
		var h=Today.getHours();
		Today.setDate(Today.getDate()+(h>=23?1:0)); 
		$("#sel_Year_CE").val(Today.getFullYear());
		$("#sel_Month_CE").val(Today.getMonth()+1);
		$("#sel_Day_CE").val(Today.getDate());
		$("#sel_Hour_CE").val(EarthlyBranches[(h+(h%2?1:0))%24/2]);
	},
	setNowDate:function (){
		this.getNowDate();
		this.genZiwei();
	},
	//取得農曆時辰，排紫微命盤
	genZiwei:function (){
		var y,m,d,h;
  		y=$("#sel_Year_CE").val();
		m=$("#sel_Month_CE").val();
		d=$("#sel_Day_CE").val();
		h=$("#sel_Hour_CE").val();
		//setLunarDate
		$("#mainHome").html("國曆日期：" + y+ " 年 " + m + " 月 " + d + " 日" + h + " 時")    .append("<br>")
					.append("農曆日期：" + LunarDate.GetLunarDay(y,m,d) +  " 日 " + h + " 時").append("<br>")
					.append("生肖屬【"+ShengXiaoGB[(LunarDate.Year - 4) % 12]+"】")           .append("<br>");
		//農曆日期
		$("#sel_Year").val(HeavenlyStems[(LunarDate.Year - 4) % 10]+EarthlyBranches[(LunarDate.Year - 4) % 12]);
		$("#sel_Month").val(LunarDate.Month);
		$("#sel_Day").val(LunarDate.Day);
		$("#sel_Hour").val(h);
		//排紫微命盤
		this.computeZiWei();
	},
	resize:function (){
		var wdth=$(window).width();
	    $("#divZiWei").css("left",wdth>640?(wdth-640)/2:0);
    },
	//initial    	  
	initial:function (){
	  this.resize();
	  //畫紫微斗數空表格
	  $("#container").append("<div id='main'><div id='queryDiv'><b>紫微斗數命盤</b><input type='button' value='現在時間*' id='getNowDate'><div id='sel_Solar'>西元<select id='sel_Year_CE'></select> 年<select id='sel_Month_CE'></select> 月<select id='sel_Day_CE'></select> 日<select id='sel_Hour_CE'></select> 時<input type='radio' id='gender' name='gender' value='M' checked>男<input type='radio' name='gender' value='F'>女<input type='button' value='查詢' id='goQueryCE'><br/><span id='sel_Launar'><select id='sel_Year'></select>年<select id='sel_Month'></select>月<select id='sel_Day'></select>日<select id='sel_Hour'></select>時<input type='button' value='查詢' id='goQuery'></span></div></div><table border='0'><tr><td><div id='main6' class='mainDiv'></div></td><td><div id='main7' class='mainDiv'></div></td><td><div id='main8' class='mainDiv'></div></td><td><div id='main9' class='mainDiv'></div></td></tr><tr><td><div id='main5' class='mainDiv'></div></td><td rowspan='2' colspan='2'><div id='mainHome' class='mainDivCenter'></div></td><td><div id='main10' class='mainDiv'></div></td></tr><tr><td><div id='main4' class='mainDiv'></div></td><td><div id='main11' class='mainDiv'></div></td></tr><tr><td><div id='main3' class='mainDiv'></div></td><td><div id='main2' class='mainDiv'></div></td><td><div id='main1' class='mainDiv'></div></td><td><div id='main12' class='mainDiv'></div></td></tr></table></div>");
	  for (i=1900;i<=2100;i++){ $("#sel_Year_CE").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=1;i<=12;i++){ $("#sel_Month_CE").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=1;i<=31;i++){ $("#sel_Day_CE").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=0;i<EarthlyBranches.length;i++){ 
	  	var w=EarthlyBranches[i]+"【"+((24+(i*2-1))%24).toString()+"~"+ (i*2+1).toString()+"】";
	  	$("#sel_Hour_CE").append($("<option></option>").attr("value", EarthlyBranches[i]).text(w));}
	  //初始日期
	  this.getNowDate();
	  //Lunar Item
	  for (i=0;i<HeavenlyStems.length;i++){
	  	  for (j=0;j<EarthlyBranches.length/2;j++){
	  		$("#sel_Year").append($("<option></option>").attr("value", HeavenlyStems[i]+EarthlyBranches[j*2+i%2] ).text(HeavenlyStems[i]+EarthlyBranches[j*2+i%2]));
	  	  }
	  }
	  for (i=0;i<12;i++){$("#sel_Month").append($("<option></option>").attr("value", i+1 ).text(i+1));}
	  for (i=0;i<30;i++){$("#sel_Day").append($("<option></option>").attr("value", i+1 ).text(i+1));}
	  for (i=0;i<EarthlyBranches.length;i++){
	  	$("#sel_Hour").append($("<option></option>").attr("value", EarthlyBranches[i]).text(EarthlyBranches[i]));
	  }
	  this.clearPalce();
	  for (i=0;i<12;i++){
	  	$("#main"+(i+1).toString()).append("<div class='MangA'>" +EarthlyBranches[i]+ "</div>");
	  }
	},
	clearPalce:function (){
		for (i=0;i<12;i++){
			$("#main"+(i+1).toString()).html("").css("background-color","").removeClass("mainDivSel");
		}
	},
	cleanZiwei:function (){
			$("#mainHome").html("");
			this.clearPalce();
			for (i=0;i<12;i++){
	  		$("#main"+(i+1).toString()).append("<div class='MangA'>" +EarthlyBranches[i]+ "</div>");
	  	}	
	},
	computeZiWei:function (){
		//y:年,m:月,d:日,h:時,g:性別,l:命宮,b:身宮,f:五行局,s:起紫微表,s4:四化星;
		y=$("#sel_Year").val();
		m=$("#sel_Month").val();
		d=$("#sel_Day").val();
		h=$("#sel_Hour").val();
		g=$('input[name=gender]:checked').val();
		y1Pos=jQuery.inArray(y.substring(0,1),HeavenlyStems);
		y2Pos=jQuery.inArray(y.substring(1,2),EarthlyBranches);
		hPos=jQuery.inArray(h,EarthlyBranches);	
		//step1//step2//step3//step4
		this.setZiwei(d);
		//stepSetStar
		this.stepSetStar(y,m,d,h);
		//起大限表
		this.setDaShian();		
	},
	getStarArr:function (STAR,size,pos){
		var starArray = new Array();
		for (i=0;i<size;i++){ starArray[i]=STAR[i][pos]; } return starArray;
	},
	getStarArrByPosArr:function (STAR,size,PosArr){
		var starArray = new Array();
		for (i=0;i<size;i++){ starArray[i]=STAR[i][PosArr[i]]; } return starArray;
	},
	putS04Str:function (starName,STAR){
		return (jQuery.inArray(starName,STAR)>=0)?"<b>"+StarM_S04[jQuery.inArray(starName,STAR)].substring(1,2)+"</b>":"　";
	},
	getS04Str:function (starName,STAR){
		return (jQuery.inArray(starName,STAR)>=0)?StarM_S04[jQuery.inArray(starName,STAR)]:"";
	},
	setZiwei:function (d){
    	//重排宮位
		this.clearPalce();
    	//安十二宮，安命宮、身宮
		l=EarthlyBranches[((12-hPos)+1+m*1.0)%12];
		b=EarthlyBranches[(12-((22-hPos)+1-m*1.0)%12)%12];
		lPos=jQuery.inArray(l,EarthlyBranches);
		bPos=jQuery.inArray(b,EarthlyBranches);
		//A:十二宮天干地支B:十二宮C:身宮
	 	for (i=0;i<12;i++){
			$("#main"+(i+1).toString())
			.append("<div class='MangA'>"+HeavenlyStems[((y1Pos%5)*2+(i<2?i+2:i)%10)%10]+"<br/>"+EarthlyBranches[i]+ "</div>")
			.append("<div class='MangB'>" +Palace[(12-lPos+i)%12]+ "</div>")
			.append("<div class='MangC'>" + (bPos==i?Palace[12]:"")+ "</div>")			;
		}
		//安五行局
		f=FiveElements[FiveEleArr[y1Pos%5][((lPos-(lPos%2==0?0:1))/2)%6]];
		$("#mainHome").append("<div>"+f+"</div>")
					  .append("<div>").append(YinYang[y1Pos%2]).append(g=="M"?"男":"女").append("</div>")
						.append("<div class='maincopy'>by cubshuang</div>");
		//起紫微表
		z=EarthlyBranches[FiveEleTable[jQuery.inArray(f,FiveElements)][d-1]];
		zPos=jQuery.inArray(z,EarthlyBranches);
	},
	stepSetStar:function (y,m,d,h){
		//準備星星
		//0:紫微,1:天機,2:太陽,3:武曲,4:天同,5:廉貞,6:天府,7:太陰,8:貪狼,9:巨門,10:天相,11:天梁,12:七殺,13:破軍
		var s14=Star_A14[zPos];
		var sZ06=this.getStarArr(Star_Z06,7,zPos);
		var sT08=this.getStarArr(Star_T08,8,sZ06[6]);
		//0:文昌 1:文曲 (時) 2:左輔 3:右弼 (月) 4:天魁 5:天鉞 6:祿存(年干)
		//var sG07=[Star_G07[0][hPos],Star_G07[1][hPos],Star_G07[2][m-1],Star_G07[3][m-1],Star_G07[4][y1Pos],Star_G07[5][y1Pos],Star_G07[6][y1Pos] ];
		var sG07=this.getStarArrByPosArr(Star_G07,7,[hPos,hPos,m-1,m-1,y1Pos,y1Pos,y1Pos]);
		//四化星
		var sS04=this.getStarArr(Star_S04,4,y1Pos);
		//六凶星
		var sB06=[Star_B06[0][y1Pos],Star_B06[1][y1Pos],Star_B06[2][y2Pos%4][hPos],Star_B06[3][y2Pos%4][hPos],Star_B06[4][hPos],Star_B06[5][hPos] ];
		//其他
		var OS05=this.getStarArr(Star_OS5,5,y2Pos);
		//準備開始組星星
		for (i=0;i<12;i++){
			var StarA1,StarA2,StarA3,StarB1,StarB2,StarC1,StarC2,AllStar;
			StarA1="";StarA2="";StarA3="";StarB1="";StarB2="";StarC1="";StarC2="";AllStar="";
			//其他星矅
			for (k=0;k<5;k++){
				if (OS05[k]==i){
					StarC1+=StarO_S05[k].substring(0,1);
					StarC2+=StarO_S05[k].substring(1,2);
				}
			}
			//六凶星
			for (k=0;k<6;k++){
				if (sB06[k]==i){
					StarB1+=StarM_B06[k].substring(0,1);
					StarB2+=StarM_B06[k].substring(1,2);
					AllStar+=StarM_B06[k]+"*";
				}
			}
			//六吉星
			for (k=0;k<=6;k++){
				if (sG07[k]==i){
					StarA1+="<span>"+StarM_A07[k].substring(0,1)+"</span>";
					StarA2+="<span>"+StarM_A07[k].substring(1,2)+"</span>";
					StarA3+="<span>"+this.putS04Str(StarM_A07[k],sS04)+"</span>";
					AllStar+=StarM_A07[k]+this.getS04Str(StarM_A07[k],sS04)+"*";
				}
			}
			//天府星系
			for (k=0;k<8;k++){
				if (sT08[k]==i){
					StarA1+=StarM_A14[k+6].substring(0,1);
					StarA2+=StarM_A14[k+6].substring(1,2);
					StarA3+=this.putS04Str(StarM_A14[k+6],sS04);
					AllStar+=StarM_A14[k+6]+this.getS04Str(StarM_A14[k+6],sS04)+"*";
				}
			}
			//紫微星系
			for (k=0;k<6;k++){
				if (sZ06[k]==i){
					StarA1+=StarM_A14[k].substring(0,1);
					StarA2+=StarM_A14[k].substring(1,2);
					StarA3+=this.putS04Str(StarM_A14[k],sS04);
					AllStar+=StarM_A14[k]+this.getS04Str(StarM_A14[k],sS04)+"*";
				}
			}
			//render Star
			$("#main"+(i+1).toString())
	  			.append("<div class='StarA'>" + StarA1+ "<br>"+StarA2 + "<br><div class='Star4'>"+StarA3 + "</div></div>")
	  			.append("<div class='StarB'>" + StarB1+ "<br>"+StarB2 + "</div>")
	  			.append("<div class='StarC'>" + StarC1+ "<br>"+StarC2 + "</div>")
	  			.append("<div class='StarAll'>" + AllStar + "</div>");
	  	}
	},
	setDaShian:function (){
		//大限資料準備
		var DaShianYear=DaShian[FiveElements.indexOf(f)];
		var MangDirection=y1Pos%2;
		MangDirection+=(g=="M")?1:0;
		//起大限表
		for (i=0;i<12;i++){
			var DSY=MangDirection==1?DaShianYear+i*10:(DaShianYear-i*10+120)%120;
	  		$("#main"+((i+lPos)%12+1).toString())
	  		    .append("<div class='MangY10'>"+DSY.toString()+" - "+(DSY+9).toString() + "</div>");
		}
		//小限資料準備
		var SiaoShianYear,SiaoShianStr,SiaoPlace;
		switch(y2Pos){
			case 2:  case 6: case 10:
				SiaoShianYear=4; break;
			case 8:  case 0: case 4:
				SiaoShianYear=11; break;
			case 5:  case 9: case 1:
				SiaoShianYear=7; break;
			case 11: case 3: case 7:
				SiaoShianYear=1; break;
		}
		//起小限表
		for (i=0;i<12;i++){
			SiaoShianStr="";
			for (j=0;j<6;j++){
				SiaoShianStr+=","+(j*12+i+1);
			}
			SiaoShianStr=SiaoShianStr.substring(1) + " ... ";
			SiaoPlace=(g=="M")?((SiaoShianYear+i)%12+1).toString():((SiaoShianYear-i+12)%12+1).toString();
			$("#main"+ SiaoPlace).append("<div class='MangY1'>"+ SiaoShianStr + "</div>");
		}
	},
	genDynamicArray:function (num){
	    for(var i=0;i<num;i++) { this[i]=""; }
	    this.length=num;
	}
};
//使用
$(document).ready(function () {
  ziwei.initial();
  $("#goQueryCE").click(function () {ziwei.genZiwei();});
  $("#getNowDate").click(function () {ziwei.setNowDate();});
  $("#getCalendar").click(function () {ziwei.cleanZiwei();});
  $("select, input[type=radio]").change(function () {ziwei.cleanZiwei();});
  $(window).resize(function() { ziwei.resize();});
});
