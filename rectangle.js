/* global $: true */
$(function(){
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#cal'),
        $perimeter =$('#peri'),
        $area = $('#area');
    $forkMeGH.show("https://github.com/Fanningyuan/rectangle");
    $bszPageFooter.show("body");
    $btnCal.click(function(){
      if(!validate('#width')||!validate('#height'))
        return;
      var w =Number($width.val());
      var h =Number($height.val());
      /*var p=2 * (w+h),
          a=w*h;*/
      var rect = rectangle();
      $perimeter.val(Math.round(rect.perimeter(w,h) * Math.pow(10, 2)) / Math.pow(10, 2));
      $area.val(Math.round(rect.area(w,h)* Math.pow(10, 2)) / Math.pow(10, 2));
    });
    //字符型校验
    //非法字符屏蔽，合法字符校验
    $width.keypress(function(e){
      if(/[abcdf-zABCDF-Z`~!@#$%^&*()\=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
        e.preventDefault();
        return;
      }
      //合法字符 e,允许出现在非科学计数法的数字末尾，数字中间
      //不能出现在前面，不能出现在空文本中，负号后面，科学计数法（e E）数字的末尾、前面、中间
      var pos =e.target.selectionStart,
          con=e.target.value;
      console.log(con)
      if(e.key==='e'){
        if(pos===0||con.indexOf('e')!==-1||con.indexOf('E')!==-1){
          e.preventDefault();
          return;
        }
        if(pos===1&&con.substring(0,1)==='-'){
          e.preventDefault();
          return;
        }
      }
    })
    $height.keypress(function(e){
  
    })
  //字段级校验
    $width.focusout(function(){
      if(!validate('#width')){
        $width.select();
      }
    })
    $height.focusout(function(){
      if(!validate('#height')){
        $height.select();
      }
    })
    function validate(p){
      var data =$(p),
          l=data.attr('data-label')
          msg=$(p+'-validation');
  
      if(data.val()===''){
        msg.html(l+'不能为空');
        data.select();
        return false;
      }
      if(!(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data.val()))){
        msg.html(l+'必须是数值');
        data.select();
        return false;
      }
      if(Number(data.val())<0){
        msg.html(l+'不能小于0');
        data.select();
        return false;
      }
      msg.html("");
      return true;
      
    }
  });
  