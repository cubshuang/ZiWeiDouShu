/*紫微斗數 Chinese Astrology Zi Wei Dou Shu*/
/*天干地支五行局*/
var YinYang=["陽","陰"];
var HeavenlyStems=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
var EarthlyBranches=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
var Palace=["【命宮】","【父母宮】","【福德宮】","【田宅宮】","【官祿宮】","【交友宮】","【遷移宮】","【疾厄宮】","【財帛宮】","【子女宮】","【夫妻宮】","【兄弟宮】","【身】"];
var FiveElements=["水二局","火六局","土五局","木三局","金四局"];
var DaShian=[2,6,5,3,4];//搭配五行局
/*Stars*/
var StarM_A14=["紫微","天機","太陽","武曲","天同","廉貞","天府","太陰","貪狼","巨門","天相","天梁","七殺","破軍"];
var StarM_A07=["文昌","文曲","左輔","右弼","天魁","天鉞","祿存"];
var StarM_S04=["化祿","化權","化科","化忌"];
var StarM_B06=["擎羊","陀羅","火星","鈴星","天空","地劫"];
var StarO_S05=["天馬","龍池","鳳閣","紅鸞","天喜"];
/*0:水二局:[1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,0,0,1,1,2,2,3,3,4]
  3:木三局:[4,1,2,5,2,3,6,3,4,7,4,5,8,5,6,9,6,7,10,7,8,11,8,9,0,9,10,1,10,11]
  4:金四局:[11,4,1,2,0,5,2,3,1,6,3,4,2,7,4,5,3,8,5,6,4,9,6,7,5,10,7,8,6,11]
  2:土五局:[6,11,4,1,2,7,0,5,2,3,8,1,6,3,4,9,2,7,4,5,10,3,8,5,6,11,4,9,6,7]
  1:火六局:[9,6,11,4,1,2,10,7,0,5,2,3,11,8,1,6,3,4,0,9,2,7,4,5,1,10,3,8,5,6]*/
var FiveEleTable=[
	[1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,0,0,1,1,2,2,3,3,4],
	[9,6,11,4,1,2,10,7,0,5,2,3,11,8,1,6,3,4,0,9,2,7,4,5,1,10,3,8,5,6],
	[6,11,4,1,2,7,0,5,2,3,8,1,6,3,4,9,2,7,4,5,10,3,8,5,6,11,4,9,6,7],
	[4,1,2,5,2,3,6,3,4,7,4,5,8,5,6,9,6,7,10,7,8,11,8,9,0,9,10,1,10,11],
	[11,4,1,2,0,5,2,3,1,6,3,4,2,7,4,5,3,8,5,6,4,9,6,7,5,10,7,8,6,11]];
var FiveEleArr=[[0,1,3,2,4,1],[1,2,4,3,0,2],[2,3,0,4,1,3],[3,4,1,0,2,4],[4,0,2,1,3,0]];
	
//StarM_A14 => 0:紫微,1:天機,2:太陽,3:武曲,4:天同,5:廉貞,6:天府,7:太陰,8:貪狼,9:巨門,10:天相,11:天梁,12:七殺,13:破軍
var Star_A14=[
	[[0],[],[13],[],[5,6],[7],[8],[4,9],[3,10],[2,11],[12],[1]],
	[[1],[0,13],[],[6],[7],[5,8],[9],[10],[4,11],[3,12],[2],[]],
	[[13],[1],[0,6],[7],[8],[9],[5,10],[11],[12],[10],[3],[2]],
	[[2],[6],[1,7],[0,8],[9],[10],[11],[5,12],[],[],[4],[3,13]],
	[[3,6],[2,7],[8],[1,9],[0,10],[11],[12],[],[5],[],[13],[4]],
	[[4,7],[3,8],[2,9],[10],[1,10],[0,12],[],[],[],[5,13],[],[6]],
	[[8],[4,9],[3,10],[2,11],[12],[1],[0],[],[13],[],[5,6],[7]],
	[[9],[10],[4,11],[3,12],[2],[],[1],[0,13],[],[6],[7],[5,8]],
	[[5,10],[11],[12],[10],[3],[2],[13],[1],[0,6],[7],[8],[9]],
	[[11],[5,12],[],[],[4],[3,13],[2],[6],[1,7],[0,8],[9],[10]],
	[[12],[],[5],[],[13],[4],[3,6],[2,7],[8],[1,9],[0,10],[11]],
	[[],[],[],[5,13],[],[6],[4,7],[3,8],[2,9],[10],[1,10],[0,12]]
];
//安紫微諸星表，第7列，[6]為天府
var Star_Z06=[
	[0,1,2,3,4,5,6,7,8,9,10,11],
	[11,0,1,2,3,4,5,6,7,8,9,10],
	[9,10,11,0,1,2,3,4,5,6,7,8],
	[8,9,10,11,0,1,2,3,4,5,6,7],
	[7,8,9,10,11,0,1,2,3,4,5,6],
	[4,5,6,7,8,9,10,11,0,1,2,3],
	[4,3,2,1,0,11,10,9,8,7,6,5]
];
var Star_T08=[
	[0,1,2,3,4,5,6,7,8,9,10,11],
	[1,2,3,4,5,6,7,8,9,10,11,0],
	[2,3,4,5,6,7,8,9,10,11,0,1],
	[3,4,5,6,7,8,9,10,11,0,1,2],
	[4,5,6,7,8,9,10,11,0,1,2,3],
	[5,6,7,8,9,10,11,0,1,2,3,4],
	[6,7,8,9,10,11,0,1,2,3,4,5],
	[10,11,0,1,2,3,4,5,6,7,8,9]
];
//StarM_A07=new Array("文昌","文曲","左輔","右弼","天魁","天鉞","祿存");
//0:文昌 1:文曲 (時) 2:左輔 3:右弼 (月) 4:天魁 5:天鉞 6:祿存(年干)
var Star_G07=[
	[10,9,8,7,6,5,4,3,2,1,0,11],
	[4,5,6,7,8,9,10,11,0,1,2,3],
	[4,5,6,7,8,9,10,11,0,1,2,3],
	[10,9,8,7,6,5,4,3,2,1,0,11],
	[1,0,11,11,1,0,1,6,3,3],
	[7,8,9,9,7,8,7,2,5,5],
	[2,3,5,6,5,6,8,9,11,0]
];
//StarM_S04=new Array("化祿","化權","化科","化忌");
//0:紫微,1:天機,2:太陽,3:武曲,4:天同,5:廉貞,6:天府,7:太陰,8:貪狼,9:巨門,10:天相,11:天梁,12:七殺,13:破軍
//0:文昌 1:文曲 (時) 2:左輔 3:右弼 (月) 4:天魁 5:天鉞 6:祿存(年干)
//0:化祿 1:化權 2:化科 3:化忌
var Star_S04=[
	[StarM_A14[5],StarM_A14[1],StarM_A14[4],StarM_A14[7],StarM_A14[8],StarM_A14[3],StarM_A14[2],StarM_A14[9],StarM_A14[11],StarM_A14[13]],
	[StarM_A14[13],StarM_A14[11],StarM_A14[1],StarM_A14[4],StarM_A14[7],StarM_A14[8],StarM_A14[3],StarM_A14[2],StarM_A14[0],StarM_A14[9]],
	[StarM_A14[3],StarM_A14[0],StarM_A07[0],StarM_A14[1],StarM_A07[3],StarM_A14[11],StarM_A14[7],StarM_A07[1],StarM_A07[2],StarM_A14[7]],
	[StarM_A14[2],StarM_A14[7],StarM_A14[5],StarM_A14[9],StarM_A14[1],StarM_A07[1],StarM_A14[4],StarM_A07[0],StarM_A14[3],StarM_A14[8]]
];
//StarM_B06=new Array("擎羊","陀羅","火星","鈴星","天空","地劫");
//0:擎羊 1:陀羅 2:火星 3:鈴星 4:天空 5:地劫
//0:2,6,10 1:8,0,4 2:5,9,1 3:11,3,7  %4=> 2,0,1,3
//改成0:8,0,4 1:5,9,1 2:2,6,10 3:11,3,7 
var Star_B06=[
	[3,4,6,7,6,7,9,10,0,1],
	[1,2,4,5,4,5,7,8,10,11],
	[[2,3,4,5,6,7,8,9,10,11,0,1],[3,4,5,6,7,8,9,10,11,0,1,2],[1,2,3,4,5,6,7,8,9,10,11,0],[9,10,11,0,1,2,3,4,5,6,7,8]],
	[[10,11,0,1,2,3,4,5,6,7,8,9],[10,11,0,1,2,3,4,5,6,7,8,9],[3,4,5,6,7,8,9,10,11,0,1,2],[10,11,0,1,2,3,4,5,6,7,8,9]],
	[11,10,9,8,7,6,5,4,3,2,1,0],
	[11,0,1,2,3,4,5,6,7,8,9,10]
];
//StarO_S05=new Array("天馬","龍池","鳳閣","紅鸞","天喜"");
var Star_OS5=[
	[2,11,8,5,2,11,8,5,2,11,8,5],
	[4,5,6,7,8,9,10,11,0,1,2,3],
	[10,9,8,7,6,5,4,3,2,1,0,11],
	[3,2,1,0,11,10,9,8,7,6,5,4],
	[9,8,7,6,5,4,3,2,1,0,11,10]
];
var ziwei = function(){
	return { initial:initial, genZiWeiDouShu:genLunarDate, setNowDate:setNowDate, cleanZiwei:cleanZiwei,getPalceMemo:getPalce2Memo};
	var y,m,d,h,g,l,b,f,s4,z;
	var y1Pos,y2Pos,hPos,lPos,bPos,zPos;
	//初始日期
	function getNowDate(){
  	//國曆日期：2016 年 9 月 19 日亥 時
		var Today=new Date();
		//var Today=new Date('2016/9/19 21:30:00');
		var h=Today.getHours();
		Today.setDate(Today.getDate()+(h>=23?1:0)); 
		$("#sel_Year_CE").val(Today.getFullYear());
		$("#sel_Month_CE").val(Today.getMonth()+1);
		$("#sel_Day_CE").val(Today.getDate());
		$("#sel_Hour_CE").val(EarthlyBranches[(h+(h%2?1:0))%24/2]);
	}
	function setNowDate(){
		getNowDate();
		genLunarDate();
	}
	//取得農曆時辰，排紫微命盤
	function genLunarDate(){
		var y,m,d,h;
  		y=$("#sel_Year_CE").val();
		m=$("#sel_Month_CE").val();
		d=$("#sel_Day_CE").val();
		h=$("#sel_Hour_CE").val();
		Lunar(0,y,m,d);
		$("#sel_Year").val(GanGB[gan.y]+ZhiGB[zhi.y]);
		$("#sel_Month").val(lunar.m);
		$("#sel_Day").val(lunar.d);
		$("#sel_Hour").val(h);
		//setLunarDate
		$("#mainHome").html("國曆日期：" + y+ " 年 " + m + " 月 " + d + " 日" + h + " 時")
		$("#mainHome").append("<br>")
					.append("農曆日期："+GanGB[gan.y]+ZhiGB[zhi.y]+" 年 "+(lunar.l?"閏":"")+lunar.m+" 月 "+lunar.d+" 日" + h + " 時")
					.append("<br>")
					.append("生肖屬【"+ShengXiaoGB[zhi.y]+"】")
					.append("<br>");
		//排紫微命盤
		computeZiWei();
	}
	//initial    	  
	function initial(){
	  //畫紫微斗數空表格
	  //<input type='button' value='...' id='getCalendar'>
	  //$("#container").append("<div id='main'><div id='queryDiv'><b>紫微斗數命盤</b><div id='sel_Solar'>西元<select id='sel_Year_CE'></select> 年<select id='sel_Month_CE'></select> 月<select id='sel_Day_CE'></select> 日<select id='sel_Hour_CE'></select> 時<input type='radio' id='gender' name='gender' value='M' checked>男<input type='radio' name='gender' value='F'>女<input type='button' value='查詢' id='goQueryCE'><input type='button' value='現在時間' id='getNowDate'><span id='sel_Launar'><select id='sel_Year'></select>年<select id='sel_Month'></select>月<select id='sel_Day'></select>日<select id='sel_Hour'></select>時<input type='button' value='查詢' id='goQuery'></span></div></div>")
	  //							 .append("<table border='0'>")
	  //							 .append("<tr><td><div id='main6' class='mainDiv'></div></td><td><div id='main7' class='mainDiv'></div></td><td><div id='main8' class='mainDiv'></div></td><td><div id='main9' class='mainDiv'></div></td><td rowspan='4'><div id='memo'></div></td></tr>")
	  //							 .append("<tr><td><div id='main5' class='mainDiv'></div></td><td rowspan='2' colspan='2'><div id='mainHome' class='mainDivCenter'></div></td><td><div id='main10' class='mainDiv'></div></td></tr>")
	  //							 .append("<tr><td><div id='main4' class='mainDiv'></div></td><td><div id='main11' class='mainDiv'></div></td></tr>")
	  //							 .append("<tr><td><div id='main3' class='mainDiv'></div></td><td><div id='main2' class='mainDiv'></div></td><td><div id='main1' class='mainDiv'></div></td><td><div id='main12' class='mainDiv'></div></td></tr>")
	  //							 .append("</table></div>");
	  //$("#container").append("<div id='main'><div id='queryDiv'><b>紫微斗數命盤</b><div id='sel_Solar'>西元<select id='sel_Year_CE'></select> 年<select id='sel_Month_CE'></select> 月<select id='sel_Day_CE'></select> 日<select id='sel_Hour_CE'></select> 時<input type='radio' id='gender' name='gender' value='M' checked>男<input type='radio' name='gender' value='F'>女<input type='button' value='查詢' id='goQueryCE'><input type='button' value='現在時間' id='getNowDate'><span id='sel_Launar'><select id='sel_Year'></select>年<select id='sel_Month'></select>月<select id='sel_Day'></select>日<select id='sel_Hour'></select>時<input type='button' value='查詢' id='goQuery'></span></div></div><table border='0'><tr><td><div id='main6' class='mainDiv'></div></td><td><div id='main7' class='mainDiv'></div></td><td><div id='main8' class='mainDiv'></div></td><td><div id='main9' class='mainDiv'></div><td rowspan='4'><div id='memo'></div></td></td></tr><tr><td><div id='main5' class='mainDiv'></div></td><td rowspan='2' colspan='2'><div id='mainHome' class='mainDivCenter'></div></td><td><div id='main10' class='mainDiv'></div></td></tr><tr><td><div id='main4' class='mainDiv'></div></td><td><div id='main11' class='mainDiv'></div></td></tr><tr><td><div id='main3' class='mainDiv'></div></td><td><div id='main2' class='mainDiv'></div></td><td><div id='main1' class='mainDiv'></div></td><td><div id='main12' class='mainDiv'></div></td></tr></table></div>");
	  $("#container").append("<div id='main'><div id='queryDiv'><b>紫微斗數命盤</b><div id='sel_Solar'>西元<select id='sel_Year_CE'></select> 年<select id='sel_Month_CE'></select> 月<select id='sel_Day_CE'></select> 日<select id='sel_Hour_CE'></select> 時<input type='radio' id='gender' name='gender' value='M' checked>男<input type='radio' name='gender' value='F'>女<input type='button' value='查詢' id='goQueryCE'><input type='button' value='現在時間' id='getNowDate'><span id='sel_Launar'><select id='sel_Year'></select>年<select id='sel_Month'></select>月<select id='sel_Day'></select>日<select id='sel_Hour'></select>時<input type='button' value='查詢' id='goQuery'></span></div></div><table border='0'><tr><td><div id='main6' class='mainDiv'></div></td><td><div id='main7' class='mainDiv'></div></td><td><div id='main8' class='mainDiv'></div></td><td><div id='main9' class='mainDiv'></div></td></tr><tr><td><div id='main5' class='mainDiv'></div></td><td rowspan='2' colspan='2'><div id='mainHome' class='mainDivCenter'></div></td><td><div id='main10' class='mainDiv'></div></td></tr><tr><td><div id='main4' class='mainDiv'></div></td><td><div id='main11' class='mainDiv'></div></td></tr><tr><td><div id='main3' class='mainDiv'></div></td><td><div id='main2' class='mainDiv'></div></td><td><div id='main1' class='mainDiv'></div></td><td><div id='main12' class='mainDiv'></div></td></tr></table></div>");
	  for (i=1900;i<=2100;i++){ $("#sel_Year_CE").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=1;i<=12;i++){ $("#sel_Month_CE").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=1;i<=31;i++){ $("#sel_Day_CE").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=0;i<EarthlyBranches.length;i++){ 
	  	var w=EarthlyBranches[i]+"【"+((24+(i*2-1))%24).toString()+"~"+ (i*2+1).toString()+"】";
	  	$("#sel_Hour_CE").append($("<option></option>").attr("value", EarthlyBranches[i]).text(w));}
	  //初始日期
	  getNowDate();
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
	  clearPalce();
	  for (i=0;i<12;i++){
	  	$("#main"+(i+1).toString()).append("<div class='MangA'>" +EarthlyBranches[i]+ "</div>");
	  }
	}
	function clearPalce(){
		//$("#mainHome").html("");
		$("#memo").html("");
		for (i=0;i<12;i++){
			$("#main"+(i+1).toString()).html("").css("background-color","").removeClass("mainDivSel");
		}
	}
	function cleanZiwei(){
			$("#mainHome").html("");
			clearPalce();
			for (i=0;i<12;i++){
	  		$("#main"+(i+1).toString()).append("<div class='MangA'>" +EarthlyBranches[i]+ "</div>");
	  	}	
	}
	function computeZiWei(){
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
		setZiwei(d);
		//stepSetStar
		stepSetStar(y,m,d,h);
		//起大限表
		setDaShian();
		
	}
	function getStarArr(STAR,size,pos){
		var starArray = new Array();
		for (i=0;i<size;i++){ starArray[i]=STAR[i][pos]; } return starArray;
	}
	function getStarArrByPosArr(STAR,size,PosArr){
		var starArray = new Array();
		for (i=0;i<size;i++){ starArray[i]=STAR[i][PosArr[i]]; } return starArray;
	}
	function putS04Str(starName,STAR){
		return (jQuery.inArray(starName,STAR)>=0)?"<b>"+StarM_S04[jQuery.inArray(starName,STAR)].substring(1,2)+"</b>":"　";
	}
	function getS04Str(starName,STAR){
		return (jQuery.inArray(starName,STAR)>=0)?StarM_S04[jQuery.inArray(starName,STAR)]:"";
	}
	function setZiwei(d){
    	//重排宮位
		clearPalce();
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
			.append("<div class='MangC'>" + (bPos==i?Palace[12]:"")+ "</div>")
			;
		}
		//安五行局
		f=FiveElements[FiveEleArr[y1Pos%5][((lPos-(lPos%2==0?0:1))/2)%6]];
		$("#mainHome").append("<div>"+f+"</div>")
					  .append("<div>")
					  .append(YinYang[y1Pos%2])
					  .append(g=="M"?"男":"女")
					  .append("</div>");
		//起紫微表
		z=EarthlyBranches[FiveEleTable[jQuery.inArray(f,FiveElements)][d-1]];
		zPos=jQuery.inArray(z,EarthlyBranches);
	}
	function stepSetStar(y,m,d,h){
		//準備星星
		//0:紫微,1:天機,2:太陽,3:武曲,4:天同,5:廉貞,6:天府,7:太陰,8:貪狼,9:巨門,10:天相,11:天梁,12:七殺,13:破軍
		var s14=Star_A14[zPos];
		var sZ06=getStarArr(Star_Z06,7,zPos);
		var sT08=getStarArr(Star_T08,8,sZ06[6]);
		//0:文昌 1:文曲 (時) 2:左輔 3:右弼 (月) 4:天魁 5:天鉞 6:祿存(年干)
		//var sG07=[Star_G07[0][hPos],Star_G07[1][hPos],Star_G07[2][m-1],Star_G07[3][m-1],Star_G07[4][y1Pos],Star_G07[5][y1Pos],Star_G07[6][y1Pos] ];
		var sG07=getStarArrByPosArr(Star_G07,7,[hPos,hPos,m-1,m-1,y1Pos,y1Pos,y1Pos]);
		//四化星
		var sS04=getStarArr(Star_S04,4,y1Pos);
		//六凶星
		var sB06=[Star_B06[0][y1Pos],Star_B06[1][y1Pos],Star_B06[2][y2Pos%4][hPos],Star_B06[3][y2Pos%4][hPos],Star_B06[4][hPos],Star_B06[5][hPos] ];
		//其他
		var OS05=getStarArr(Star_OS5,5,y2Pos);
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
					StarA3+="<span>"+putS04Str(StarM_A07[k],sS04)+"</span>";
					AllStar+=StarM_A07[k]+getS04Str(StarM_A07[k],sS04)+"*";
				}
			}
			//天府星系
			for (k=0;k<8;k++){
				if (sT08[k]==i){
					StarA1+=StarM_A14[k+6].substring(0,1);
					StarA2+=StarM_A14[k+6].substring(1,2);
					StarA3+=putS04Str(StarM_A14[k+6],sS04);
					AllStar+=StarM_A14[k+6]+getS04Str(StarM_A14[k+6],sS04)+"*";
				}
			}
			//紫微星系
			for (k=0;k<6;k++){
				if (sZ06[k]==i){
					StarA1+=StarM_A14[k].substring(0,1);
					StarA2+=StarM_A14[k].substring(1,2);
					StarA3+=putS04Str(StarM_A14[k],sS04);
					AllStar+=StarM_A14[k]+getS04Str(StarM_A14[k],sS04)+"*";
				}
			}
			//render Star
			$("#main"+(i+1).toString())
	  			.append("<div class='StarA'>" + StarA1+ "<br>"+StarA2 + "<br><div class='Star4'>"+StarA3 + "</div></div>")
	  			.append("<div class='StarB'>" + StarB1+ "<br>"+StarB2 + "</div>")
	  			.append("<div class='StarC'>" + StarC1+ "<br>"+StarC2 + "</div>")
	  			.append("<div class='StarAll'>" + AllStar + "</div>");
	  	}
	}
	function setDaShian(){
		//大限資料準備
		var DaShianYear=DaShian[FiveElements.indexOf(f)];
		var MangDirection=y1Pos%2;
		MangDirection+=(g=="M")?1:0;
		for (i=0;i<12;i++){
			//起大限表
			var DSY=MangDirection==1?DaShianYear+i*10:(DaShianYear-i*10+120)%120;
			//$("#memo").append(((i+lPos+1)%12).toString()).append("<br>");
	  		$("#main"+((i+lPos)%12+1).toString())
	  		    .append("<div class='MangY10'>"+DSY.toString()+" - "+(DSY+9).toString() + "</div>");
		}
		//小限資料準備
		//$("#memo").append(y2Pos).append("<br>");
		var SiaoShianYear;
		//alert(y2Pos);
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
		var SiaoShianStr,SiaoPlace;
		for (i=0;i<12;i++){
			SiaoShianStr="";
			for (j=0;j<6;j++){
				SiaoShianStr+=","+(j*12+i+1);
			}
			SiaoShianStr=SiaoShianStr.substring(1) + " ... ";
			//起小限表
			SiaoPlace=(g=="M")?((SiaoShianYear+i)%12+1).toString():((SiaoShianYear-i+12)%12+1).toString();
			//alert((g=="M")?((SiaoShianYear+i)%12+1).toString():((SiaoShianYear-i+12)%12+1).toString());
			//$("#main"+ (g=="M")?((SiaoShianYear+i)%12+1).toString():((SiaoShianYear-i+12)%12+1).toString() ).append("<div class='MangY1'>"+ SiaoShianStr.substring(1)+ "</div>");
			$("#main"+ SiaoPlace).append("<div class='MangY1'>"+ SiaoShianStr + "</div>");
			/*
			if(g=="M"){
	  			$("#main"+((SiaoShianYear+i)%12+1).toString())
	  				.append("<div class='MangY1'>"+ SiaoShianStr.substring(1)+ "</div>");
	  		}else{
				$("#main"+((SiaoShianYear-i+12)%12+1).toString())
	  				.append("<div class='MangY1'>"+ SiaoShianStr.substring(1)+ "</div>");
	  		}
	  		*/
		}
	}
	//取得宮內資料並註記
	function getPalce2Memo(palceId){
	  for(i=1;i<=12;i++){
	  	var id="main"+i.toString();
	  	if (id!=palceId){
	  		$("#"+id).css("background-color","").removeClass("mainDivSel");
	  	}
	  }
	  if ($("#"+palceId).css("background-color")==$("#mainHome").css("background-color")){
			 var allstar=$("#"+palceId).find("div[class=StarAll]").html();
			 if (allstar!=undefined){
					 var allstarAry=allstar.split("*");
					 var PalceName=$("#"+palceId).find("div[class=MangB]").html();
					 $("#memo").html("")
						 //.append($("#"+palceId).find("div[class=MangB]").html())
						 .append(PalceName)
						 .append($("#"+palceId).find("div[class=MangC]").html())
						 .append("<br>");
					 /*
					 if (allstar.length==0){
					 		 //該宮無主星參考對宮星耀
					 		 $("#memo").append("【該宮無主星參考對宮星耀】").append("<br>");
					 	   var OppPalceId=(palceId.substring(4,palceId.length)*1.0+6)%12;
					 		 allstar=$("#main"+OppPalceId).find("div[class=StarAll]").html();
					 		 allstarAry=allstar.split("*");
					 }
					 */
					 //41400 ☆ 41401 ★ 
					 $("#memo").append(allstarAry.length>1?"☆":"");
					 for (i=allstarAry.length-2;i>=0;i--){
							 $("#memo").append(allstarAry[i]).append(i==0?"":"、");
					 };
					 $("#memo").append("<br><br>")
					 //alert(ziweiMemo[0].name);
					 //alert(ziweiMemo[0].memo[0]);
					 
					 //alert(jQuery.inArray(PalceName,Palace));
					 //選取CSS
					 $("#"+palceId).css("background-color","#FFFFD7");
					 $("#"+palceId).addClass("mainDivSel");
					 
					 //setZiweiMemo
					 setZiweiMemo(PalceName,allstar);
					 
			 }
	  }else{
		   $("#memo").html("");
	  	 $("#"+palceId).css("background-color","").removeClass("mainDivSel");
	  }
	}
	
	function genDynamicArray(num){
	    for(var i=0;i<num;i++) { this[i]=""; }
	    this.length=num;
	}
	function setZiweiMemo(p,star){
	    var size=0;
	    var starlist=star.substring(0,star.length-1).split("*");
	    var s=star.substring(0,star.length-1).split("*");
	    for(i=0;i<s.length;i++) { s[i]=""; }
		  for(i=starlist.length-1;i>=0;i--) {
	    	  if (starlist[i].length>0){
	    	  	 s[size]=starlist[i];
	    	  	 size++;
	    		}
	  	}
		  //var p="【命宮】";
	    //var s=["紫微化權","天相","地劫"];
	    $("#memo").append("說明：<br>")
	    var t=["","","",""];//"化祿","化權","化科","化忌"
	    for (i=0;i<ziweiMemo.length;i++){
	        if (ziweiMemo[i].name==p){
	            for (j=0;j<ziweiMemo[i].memo.length;j++){
	                if (ziweiMemo[i].memo[j].star==s[0].substring(0,2)){
	                   if (s[0].length>2){
	                       t[jQuery.inArray(s[0].substring(2,4),StarM_S04)]=s[0].substring(2,4);
	                   }
	                   //◢=25e2　◣=25e3　◤=25e4　◥=25e5 41400 ☆ 41401 ★ 
	                   //第一顆主星，順序 by StarM_A14
	                   for (k=0;k<ziweiMemo[i].memo[j].memo.length;k++){
	                       $("#memo").append("◢").append(ziweiMemo[i].memo[j].memo[k].m).append("<br>");
	                   }
	                   //其他星曜，順序 by StarM_A14、StarM_A07、StarM_B06
	                   for (k1=1;k1<s.length;k1++){
	                        //alert(ziweiMemo[i].memo[j].plusStar.length);
	                       for (k2=0;k2<ziweiMemo[i].memo[j].plusStar.length;k2++){
	                           if (ziweiMemo[i].memo[j].plusStar[k2].star==s[k1].substring(0,2)){
	                              if (s[k1].length>2){
	                                 t[jQuery.inArray(s[k1].substring(2,4),StarM_S04)]=s[k1].substring(2,4);
	                              }
	                               //alert(ziweiMemo[i].memo[j].plusStar[k2].memo.length);
	                               for (k3=0;k3<ziweiMemo[i].memo[j].plusStar[k2].memo.length;k3++){
	                                  $("#memo").append("◢").append(ziweiMemo[i].memo[j].plusStar[k2].memo[k3].m).append("<br>");
	                              }
	                           }
	                        }
	                   }
	                   //四化
	                   for (k4=0;k4<t.length;k4++){
	                   	   if (t[k4].length>0){
	                   	       for (k5=0;k5<ziweiMemo[i].memo[j].plus4Star.length;k5++){
	                   	       	   if (ziweiMemo[i].memo[j].plus4Star[k5].star==t[k4]){
	                   	       	   	   for(k6=0;k6<ziweiMemo[i].memo[j].plus4Star[k5].memo.length;k6++){
	                   	       	   	   	   $("#memo").append("◢").append(ziweiMemo[i].memo[j].plus4Star[k5].memo[k6].m).append("<br>");
	                   	       	   	   }
	                   	       	   }
	                   	       }
	                   	   }
	                   }
	                }
	            }
	            break;
	       }
	    }
  	}
}();
//
$(document).ready(function () {
  ziwei.initial();
  $("#goQueryCE").click(function () {ziwei.genZiWeiDouShu();});
  $("#getNowDate").click(function () {ziwei.setNowDate();});
  $("#getCalendar").click(function () {ziwei.cleanZiwei();});
  $("select").change(function () {ziwei.cleanZiwei();});
  $(".mainDiv").click(function () { ziwei.getPalceMemo(this.id); });
});
