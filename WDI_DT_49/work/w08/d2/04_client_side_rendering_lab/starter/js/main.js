console.log('main.js loaded!');

$(document).ready(function() {
  console.log('document loaded!');
  // var templateString = $('#template').html
  // var templateString2 = document.querySelector('#tempplate').html
  // generate a temppalte function from the template string
  // var template = _.template(templateString)
  // var template({name: 'aj', food: 'pasta' })


  // document.getElementById('demoTarget').innerHTML = template()
  // $('#demotarget').html(template({ name: 'aj', food: 'ramen'}))

  var thing = fancyData[0];
  
  var productTemplateStr = $('#productTemplate').html()
  console.log(productTemplateStr)
  
    var productTemplate = _.template(productTemplateStr);
  console.log(productTemplate)
  
  fancyData.forEach(function(product) {
    var renderProductHtml = productTemplate(product);
  console.log(renderProductHtml)
  $('#productTarget').append(renderProductHtml);
  });



});
