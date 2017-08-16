/*紫微斗數 Chinese Astrology Zi Wei Dou Shu*/
 var ziweiUI = {
	//主星列印方向 true:由右向左,false:由左向右
	right2left:true,
	//UI resize
	resize:function (){
		var wdth=$(window).width();
	    $("#divZiWei").css("left",wdth>640?(wdth-640)/2:0);
    },
    genNowDateZiwei:function (){
		this.getNowDate();
		this.genZiwei();
	},
    getNowDate:function(){
		var Today=new Date();
		var h=Today.getHours();
		Today.setDate(Today.getDate()+(h>=23?1:0)); 
		$("#sel_Year").val(Today.getFullYear());
		$("#sel_Month").val(Today.getMonth()+1);
		$("#sel_Day").val(Today.getDate());
		$("#sel_Hour").val(EarthlyBranches[(h+(h%2?1:0))%24/2]);
	},
	//initial    	  
	initial:function (){
	  this.resize();
	  //畫紫微斗數空表格
	  $("#container").append("<div id='main'><div id='queryDiv'><b>紫微斗數命盤</b><input type='button' value='現在時間*' id='btnNowDate'><div id='sel_Solar'>西元<select id='sel_Year'></select> 年<select id='sel_Month'></select> 月<select id='sel_Day'></select> 日<select id='sel_Hour'></select> 時<input type='radio' id='gender' name='gender' value='M' checked>男<input type='radio' name='gender' value='F'>女<input type='button' value='查詢' id='goQuery'></div></div><table border='0'><tr><td><div id='main6' class='mainDiv'></div></td><td><div id='main7' class='mainDiv'></div></td><td><div id='main8' class='mainDiv'></div></td><td><div id='main9' class='mainDiv'></div></td></tr><tr><td><div id='main5' class='mainDiv'></div></td><td rowspan='2' colspan='2'><div id='mainHome' class='mainDivCenter'></div></td><td><div id='main10' class='mainDiv'></div></td></tr><tr><td><div id='main4' class='mainDiv'></div></td><td><div id='main11' class='mainDiv'></div></td></tr><tr><td><div id='main3' class='mainDiv'></div></td><td><div id='main2' class='mainDiv'></div></td><td><div id='main1' class='mainDiv'></div></td><td><div id='main12' class='mainDiv'></div></td></tr></table></div>");
	  for (i=1900;i<=2049;i++){ $("#sel_Year").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=1;i<=12;i++){ $("#sel_Month").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=1;i<=31;i++){ $("#sel_Day").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=0;i<EarthlyBranches.length;i++){ 
	  	var w=EarthlyBranches[i]+"【"+((24+(i*2-1))%24).toString()+"~"+ (i*2+1).toString()+"】";
	  	$("#sel_Hour").append($("<option></option>").attr("value", EarthlyBranches[i]).text(w));}
	  //初始日期
	  this.getNowDate();
	  this.clearPalce();
	},
	clearPalce:function (){
		for (i=0;i<12;i++){ 
			$("#main"+(i+1).toString()).html("").css("background-color","").removeClass("mainDivSel")
			.append("<div class='MangA'>" +EarthlyBranches[i]+ "</div>");
		}
	},
	cleanZiwei:function (){
		$("#mainHome").html(""); 
		this.clearPalce();
	},
	genZiwei:function(){
		var zw = ziwei.computeZiWei( $("#sel_Year").val(), $("#sel_Month").val(), $("#sel_Day").val(), $("#sel_Hour").val(), $('input[name=gender]:checked').val());
		//Home
		$("#mainHome").html("國曆：" + ziwei.getSolarDay()).append("<br>")
					.append("農曆：" + ziwei.getLunarDay()).append("<br>")
					.append("生肖：【" + ziwei.getShengXiao() + "】").append("<br>")
					.append("<div>"+ ziwei.getFiveElement() +"</div>")
					.append("<div>"+ ziwei.getYinYangGender()+"</div>")
					.append("<div class='maincopy'>by cubshuang</div>");
	    //render Direction
		var styleLR=[" zwStarLeft"," zwStarRight"];
		if(this.right2left){ styleLR.reverse(); }
		//render Star
	    for (i=0;i<12;i++){
	    	$("#main"+(i+1).toString())
				.append("<div class='MangA'>" + zw[i].MangA + "</div>")
				.append("<div class='MangB'>" + zw[i].MangB + "</div>")
				.append("<div class='MangC'>" + zw[i].MangC + "</div>")
	  			.append("<div class='StarAll'>" + zw[i].StarAll + "</div>");
	  		var StarA1,StarA2,StarA3,StarB1,StarB2,StarC1,StarC2;
	  		StarA1="";StarA2="";StarA3="";StarB1="";StarB2="";StarC1="";StarC2="";
			var tmpSatrA=[[],[],[]];
			var k=0;
			for (j=0;j<zw[i].StarA.length;j++){
				tmpSatrA[0][k]=zw[i].StarA[j].substring(0,1);
	  			tmpSatrA[1][k]=zw[i].StarA[j].substring(1,2);
	  			tmpSatrA[2][k]=(zw[i].StarA[j].length>2)?"<b>"+zw[i].StarA[j].substring(3,4)+"</b>":"　";
				k+=1;
			}	
			for (j=0;j<zw[i].Star6.length;j++){
		  		tmpSatrA[0][k]="<span>"+zw[i].Star6[j].substring(0,1)+"</span>"
		  		tmpSatrA[1][k]="<span>"+zw[i].Star6[j].substring(1,2)+"</span>"
		  		tmpSatrA[2][k]=(zw[i].Star6[j].length>2)?"<b>"+zw[i].Star6[j].substring(3,4)+"</b>":"　";
				k+=1;
			}
			//style Left or Right
			if(this.right2left){
				for(j=0;j<3;j++){ tmpSatrA[j].reverse(); }
			}
			//render StarA & B & C
	  		for (j=0;j<tmpSatrA[0].length;j++){
				StarA1+=tmpSatrA[0][j];
	  			StarA2+=tmpSatrA[1][j];
	  			StarA3+=tmpSatrA[2][j];
	  		}
	  		for (j=0;j<zw[i].StarB.length;j++){
	  			StarB1+=zw[i].StarB[j].substring(0,1);
	  			StarB2+=zw[i].StarB[j].substring(1,2);
			}
	  		for (j=0;j<zw[i].StarC.length;j++){
	  			StarC1+=zw[i].StarC[j].substring(0,1)
	  			StarC2+=zw[i].StarC[j].substring(1,2)
		  	}
	  		//render
			$("#main"+(i+1).toString())
	  			.append("<div class='StarA"+ styleLR[0] + "'>" + StarA1+ "<br>"+StarA2 + "<br><div class='Star4'>"+StarA3 + "</div></div>")
	  			.append("<div class='StarB"+ styleLR[1] + "'>" + StarB1+ "<br>"+StarB2 + "</div>")
	  			.append("<div class='StarC'>" + StarC1+ "<br>"+StarC2 + "</div>")
		}
		//大小限表
		var DS_Shian=ziwei.getDaShian();
		for (i=0;i<12;i++){
			$("#main"+(i+1).toString())
				.append("<div class='MangY10'>"+ DS_Shian.DShian[i+1] + "</div>")
				.append("<div class='MangY1'>" + DS_Shian.SShian[i+1] + "</div>");
		}
	}
};
var ziwei = {
	y:null, m:null, d:null, h:null, g:null, l:null, b:null, f:null, s4:null, z:null,
	yS:null, mS:null, dS:null, LunarDay:null, ShengXiao:null,
	y1Pos:null,	y2Pos:null,	hPos:null,	lPos:null,	bPos:null,	zPos:null, Palce:null,
	Place12:null,
	//排紫微命盤
	computeZiWei:function (y_Solar,m_Solar,d_Solar,h_Solar,g_Solar){
		//y:年,m:月,d:日,h:時,g:性別,l:命宮,b:身宮,f:五行局,s:起紫微表,s4:四化星;
		yS=y_Solar;
		mS=m_Solar;
		dS=d_Solar;
		//取得農曆時辰，排紫微命盤
		Lunar(0,yS,mS,dS);
		y=HeavenlyStems[(yS - 4) % 10]+EarthlyBranches[(yS - 4) % 12];
		m=lunar.m;
		d=lunar.d;
		h=h_Solar;
		g=g_Solar;
		//年:天干地支
		y1Pos=jQuery.inArray(y.substring(0,1),HeavenlyStems);
		y2Pos=jQuery.inArray(y.substring(1,2),EarthlyBranches);
		//時:地支
		hPos=jQuery.inArray(h,EarthlyBranches);	
		//設定紫微斗數
		this.setZiwei(d);
		//stepSetStar
		this.stepSetStar(y,m,d,h);
		return Place12;
	},
	//CenterPart↑↓
	getLunarDay:function(){return GanGB[gan.y]+ZhiGB[zhi.y]+" 年 "+(lunar.l?"閏":"")+lunar.m+" 月 "+lunar.d+" 日 " + h + " 時";},
	getSolarDay:function(){return yS+ " 年 " + mS + " 月 " + dS + " 日" + h + " 時";},
	getShengXiao:function(){return ShengXiaoGB[(yS - 4) % 12];},
	getFiveElement:function(){return f;},
	getYinYangGender:function(){return YinYang[y1Pos%2]+(g=="M"?"男":"女");},
	//CenterPart↑
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
		ziweiUI.clearPalce();
    	//安十二宮，安命宮、身宮
		l=EarthlyBranches[((12-hPos)+1+m*1.0)%12];
		b=EarthlyBranches[(12-((22-hPos)+1-m*1.0)%12)%12];
		lPos=jQuery.inArray(l,EarthlyBranches);
		bPos=jQuery.inArray(b,EarthlyBranches);
		//安五行局
		f=FiveElements[FiveEleArr[y1Pos%5][((lPos-(lPos%2==0?0:1))/2)%6]];
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
		var sG07=this.getStarArrByPosArr(Star_G07,7,[hPos,hPos,m-1,m-1,y1Pos,y1Pos,y1Pos]);
		//四化星
		var sS04=this.getStarArr(Star_S04,4,y1Pos);
		//六凶星
		var sB06=[Star_B06[0][y1Pos],Star_B06[1][y1Pos],Star_B06[2][y2Pos%4][hPos],Star_B06[3][y2Pos%4][hPos],Star_B06[4][hPos],Star_B06[5][hPos] ];
		//其他
		var OS05=this.getStarArr(Star_OS5,5,y2Pos);
		Place12=new Array(12);
		//準備開始組星星
		for (i=0;i<12;i++){
			var StarA,StarB,StarC,Star6,lenStar=[0,0,0,0];
			StarA=[];StarB=[];StarC=[];Star6=[];
			for (k=0;k<8;k++){
				//天府星系 & 紫微星系 & 六凶星 & 六吉星 & 其他星矅StarO_S0.length
				if (sT08[k]==i){ StarA[lenStar[0]]=StarM_A14[k+6]+this.getS04Str(StarM_A14[k+6],sS04); lenStar[0]+=1; }
				if (sZ06[k]==i){ StarA[lenStar[0]]=StarM_A14[k]+this.getS04Str(StarM_A14[k],sS04); lenStar[0]+=1; }
				if (sB06[k]==i){ StarB[lenStar[1]]=StarM_B06[k]; lenStar[1]+=1;}
				if (sG07[k]==i){ Star6[lenStar[3]]=StarM_A07[k]+this.getS04Str(StarM_A07[k],sS04); lenStar[3]+=1; }
				if (OS05[k]==i){ StarC[lenStar[2]]=StarO_S05[k]; lenStar[2]+=1;}
			}
			//塞入位置
	  		Place12[i]={
	  			"MangA": HeavenlyStems[((y1Pos%5)*2+(i<2?i+2:i)%10)%10]+"<br/>"+EarthlyBranches[i],
	  			"MangB": Palace[(12-lPos+i)%12],
	  			"MangC": (bPos==i?Palace[12]:""),
	  			"StarA": StarA,"StarB": StarB,"StarC": StarC,"Star6": Star6
	  		};
	  	}
	},
	getDaShian:function (){
		//大限資料準備
		var DaShianYear=DaShian[FiveElements.indexOf(f)];
		var MangDirection=y1Pos%2; MangDirection+=(g=="M")?1:0;
		//小限資料準備
		var SiaoShianYear,SiaoShianStr,SiaoPlace;
		switch(y2Pos){
			case 2:  case 6: case 10: SiaoShianYear=4; break;
			case 8:  case 0: case 4:  SiaoShianYear=11; break;
			case 5:  case 9: case 1:  SiaoShianYear=7; break;
			case 11: case 3: case 7:  SiaoShianYear=1; break;
		}
		var DShian=new Array(10);
		var SShian=new Array(10);
		for (i=0;i<12;i++){
			//起大限表
			var DSY=MangDirection==1?DaShianYear+i*10:(DaShianYear-i*10+120)%120;
	  		//起小限表
	  		SiaoShianStr="";
			for (j=0;j<6;j++){
				SiaoShianStr+=","+(j*12+i+1);
			}
			SiaoShianStr=SiaoShianStr.substring(1) + " ... ";
			SiaoPlace=(g=="M")?((SiaoShianYear+i)%12+1).toString():((SiaoShianYear-i+12)%12+1).toString();
			DShian[(i+lPos)%12+1]=DSY.toString()+" - "+(DSY+9).toString();
			SShian[SiaoPlace]=SiaoShianStr;
		}
		return {"DShian":DShian,"SShian":SShian};
	}
};
//開始使用
$(document).ready(function () {
	ziweiUI.initial();
	ziweiUI.right2left=false;
	$("#goQuery").click(function () {ziweiUI.genZiwei();});
	$("#btnNowDate").click(function () {ziweiUI.genNowDateZiwei();});
	$("select, input[type=radio]").change(function () {ziweiUI.cleanZiwei();});
	$(window).resize(function() { ziweiUI.resize();});
});
