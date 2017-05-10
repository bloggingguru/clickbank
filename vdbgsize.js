		jQuery(function() {

			jQuery('#universal_video_background_default').universal_video_background({
				width: 1920,
				height: 1200,
				autoPlayFirstVideo:true,
				width100Proc:true,
				height100Proc:true,
				responsive:true,
				setAsBg:true,
				showVideoControls:false,
				showBottomNav:false,
				showOnInitBottomNav:true,
				autoHideBottomNav:true,
				bottomNavPos:'right', //left/center/right
				bottomNavLateralMargin:3,
				
				borderWidth: 0,
				borderColor: 'none',	
				
				texturePath:'images/bg.png',
							
				thumbsBorderColorON:'none',
				thumbsBorderColorOFF:'none',
				thumbsWrapperBg:'transparent', //hexa or image
				thumbsBgOffImgOpacity:90,
				thumbsWrapperMarginTop:40
				
			});	
			
			
		});