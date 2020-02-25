

function getVal(flag) {
  if (flag){
    console.log(`姓名: ${user.name}, 年龄: ${user.age}, 性别: ${user.sex}`)
  } else {
    console.log(`姓名: ${name}, 年龄: ${age}, 性别: ${sex}`)
  }
}

/**
 * input绑定模板
 */
function inputModel(){
  var inputDom = [...document.querySelectorAll('input')];
  inputDom.forEach(input => {
    var res = input.getAttribute('h-model');
    if (res) {
      input.addEventListener('input', function(e) {
        var data = res.split('.');
        if (data.length > 1) {
          let res = data.reduce((defaultValue, currentValue, index) => {
            if (index > 0){
              defaultValue[currentValue] = e.target.value;
              return defaultValue
            } else {
              return {}
            }
          }, {})
          // console.log(res, 'res')
          window[data[0]] = {...window[data[0]],...res};
        } else {
          window[res] = e.target.value;
        }

        input.setAttribute('value', e.target.value);
        templateRender();
      })
    }
  })
}


/**
 * 获取bind模板
 */
function templateRender(){
  // console.log(document.querySelectorAll('*[h-bind]'))
  var doms = document.querySelectorAll('*[h-bind]');
  doms.forEach(dom => {
    dom.textContent = evData(dom.getAttribute('h-bind'));
  })
}


/**
 * 获取对象
 * @param {*} str
 */
function evData(str){
  try {
    return new Function('return '+str)()
  } catch (error) {
    console.log(error)
  }
}