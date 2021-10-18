'use strict'

$(initPage)

function initPage() {
    createPorjects()
  renderProjects()

  $('.contact-btn').click(emailContact)
}

function renderProjects() {
  var projects = getProjs()
  var strHTML = ''
 
    projects.forEach(val =>{
        strHTML += `
        <div class="col-md-4 col-sm-6 portfolio-item"> 
        <a class="portfolio-link" data-toggle="modal" onclick="openModal('${val.id}')"> 
         <div class="portfolio-hover">
       
       <div class="portfolio-hover-content"> 
       <i class="fa fa-plus fa-3x"></i>  
     
       </div>
        </div> 
        <img class="img-fluid" src="img/portfolio/${val.id}-thumbnail.png" >
             </a> 
             <div class="portfolio-caption"> 
             <h4>${val.title}</h4>
   <p class="text-muted">${val.name}</p>
    </div>
    </div>
    `
    })
 
  $('.portfolio-row').html(strHTML)
}

function openModal(id){
   renderProjectModal(id)
   $('#portfolioModal').modal()
}

function renderProjectModal(id) {
      var project = getProjectById(id)
      project = project[0]
  var strHTML = ''
    strHTML +=
     `<div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body"> 
                  <h2>${project.title}</h2>
                         <p class="item-intro text-muted">${
                           project.name
                         }.</p>
                         <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}-thumbnail.png" alt="">
                       <p>${project.desc}</p>
                         <ul class="list-inline">
                           <li>Date: ${project.publishedAt}</li>
                           <li>Creator: Beny.K</li>
                           <li>Category: ${project.labels}</li>
                         </ul>
                         <a href="${
                           project.url
                         }" target="_blank" rel="noopener noreferrer">
                        <button class="btn btn-primary"  type="button">
                        
                           <i class="fa fa-times"></i>
                          Open Project</button></a>
                 </div>
                </div>
               </div>
             </div>
           </div>
         
         </div>
         `
  
  $('.portoflio-modals').html(strHTML)
}

function emailContact() {
  var msg = $('.body-input').val()
  var subject = $('.subject-input').val()
  var windowFeatures =
    'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes'
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=beku1997@gmail.com&su=${subject}&body=${msg}`,
    'Gmail',
    windowFeatures
  )
  $('.email-input').val('')
  $('.body-input').val('')
  $('.subject-input').val('')
}
