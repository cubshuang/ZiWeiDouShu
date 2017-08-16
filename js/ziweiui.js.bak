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
	  $("#container").append("<div id='main'><div id='queryDiv'><b>紫微斗數命盤</b><div id='sel_Solar'>西元<select id='sel_Year'></select> 年<select id='sel_Month'></select> 月<select id='sel_Day'></select> 日<select id='sel_Hour'></select> 時<input type='radio' id='gender' name='gender' value='M' checked>男<input type='radio' name='gender' value='F'>女<input type='button' value='現在時間*' id='btnNowDate'></div></div><table border='0'><tr><td><div id='main6' class='mainDiv'></div></td><td><div id='main7' class='mainDiv'></div></td><td><div id='main8' class='mainDiv'></div></td><td><div id='main9' class='mainDiv'></div></td></tr><tr><td><div id='main5' class='mainDiv'></div></td><td rowspan='2' colspan='2'><div id='mainHome' class='mainDivCenter'></div></td><td><div id='main10' class='mainDiv'></div></td></tr><tr><td><div id='main4' class='mainDiv'></div></td><td><div id='main11' class='mainDiv'></div></td></tr><tr><td><div id='main3' class='mainDiv'></div></td><td><div id='main2' class='mainDiv'></div></td><td><div id='main1' class='mainDiv'></div></td><td><div id='main12' class='mainDiv'></div></td></tr></table></div>");
	  for (i=1900;i<=2049;i++){ $("#sel_Year").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=1;i<=12;i++){ $("#sel_Month").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=1;i<=31;i++){ $("#sel_Day").append($("<option></option>").attr("value",i).text(i)); }
	  for (i=0;i<EarthlyBranches.length;i++){ 
	  	var w=EarthlyBranches[i]+"【"+((24+(i*2-1))%24).toString()+"~"+ (i*2+1).toString()+"】";
	  	$("#sel_Hour").append($("<option></option>").attr("value", EarthlyBranches[i]).text(w));}
	  //初始日期
	  this.getNowDate();
	  this.clearPalce();
	  ziweiUI.genNowDateZiwei();
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
//開始使用
$(document).ready(function () {
	ziweiUI.initial();
	ziweiUI.right2left=false;
	$("#btnNowDate").click(function () {ziweiUI.genNowDateZiwei();});
	$("select, input[type=radio]").change(function () {ziweiUI.genZiwei();});
	$(window).resize(function() { ziweiUI.resize();});
});