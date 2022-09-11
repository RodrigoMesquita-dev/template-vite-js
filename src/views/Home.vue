<template>
    <main>
      <div class="laptop:bg-hero-pattern">
        <div class="mt-20 container mx-auto flex flex-row justify-between items-center py-32">
          <div class="flex flex-col">
            <h1>
              I build awesome experiences.
            </h1>
            <p class="mb-10"> 
              I'm a developer
            </p>
            <a class=" button w-max">
              Checkout my work
            </a>
          </div>  
        </div>
      </div>
      <div class="wrapper bg-form-pattern">
        <h2>Portfolio</h2>
        <p class="hidden laptop:block" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam dignissim felis vitae ornare. 
          Phasellus dictum placerat convallis. Aenean fermentum vulputate massa. Fusce vitae mi commodo, consequat nisl nec, 
          iaculis nulla. Proin tincidunt vehicula erat, eu dictum sem mollis ut. Suspendisse posuere elit in dui bibendum condimentum 
          sit amet at ligula. Fusce tincidunt dapibus viverra. In iaculis lacus vitae finibus efficitur. Suspendisse tristique purus
          nec nulla tempor, ut porttitor est blandit. Integer interdum cursus commodo. Cras pharetra libero leo, in auctor est
          vehicula scelerisque. Ut dapibus elementum magna, eu bibendum lacus aliquet rutrum. Nam volutpat 
          tempor lacus, sed volutpat quam imperdiet sit amet. Quisque sed tortor non nisl varius scelerisque ut vel lorem. Aliquam at urna 
          vitae metus maximus tempor.</p>
          <p class="laptop:hidden" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam dignissim felis vitae ornare. 
          Phasellus dictum placerat convallis. Aenean fermentum vulputate massa. Fusce vitae mi commodo, consequat nisl nec, 
          iaculis nulla. Proin tincidunt vehicula erat, eu dictum sem mollis ut. Suspendisse posuere elit in dui bibendum condimentum 
          sit amet at ligula.</p>
        <div class="grid grid-cols-2 gap-8 my-8">
          <div class="mx-2 col-span-2 laptop:col-span-1 bg-portfolio-work-background bg-no-repeat bg-center py-8">
            <img class="w-495 h-285 rounded mx-auto " src="../images/portfolio-1.png" alt=""/>
          </div>
          <div class="mx-2 col-span-2 laptop:col-span-1 bg-portfolio-work-background bg-no-repeat bg-center py-8">
            <img class="w-495 h-285 rounded mx-auto" src="../images/portfolio-1.png" alt=""/>
          </div>
        </div>
      </div>
      <div class="wrapper laptop:bg-about-pattern">
        <h2>About</h2>
        <div class="flex laptop:flex-row flex-col items-center">
          <div class=" flex-1 bg-portfolio-work-background bg-no-repeat bg-center py-8 laptop:mb-0 laptop:mr-8 desktop:mr-0">
            <img class="w-495 h-285 rounded mx-auto " src="../images/portfolio-1.png" alt=""/>
          </div>
          <p class="flex-1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam dignissim felis vitae ornare. 
          Phasellus dictum placerat convallis. Aenean fermentum vulputate massa. Fusce vitae mi commodo, consequat nisl nec, 
          iaculis nulla. Proin tincidunt vehicula erat, eu dictum sem mollis ut. Suspendisse posuere elit in dui bibendum condimentum 
          sit amet at ligula. Fusce tincidunt dapibus viverra. In iaculis lacus vitae finibus efficitur. Suspendisse tristique purus
          nec nulla tempor, ut porttitor est blandit. Integer interdum cursus commodo. Cras pharetra libero leo, in auctor est
          vehicula scelerisque. Ut dapibus elementum magna, eu bibendum lacus aliquet rutrum. Nam volutpat 
          tempor lacus, sed volutpat quam imperdiet sit amet. Quisque sed tortor non nisl varius scelerisque ut vel lorem. Aliquam at urna 
          vitae metus maximus tempor.</p>
        </div>
      </div>
      <div class="wrapper bg-form-pattern">
        <h2>Contact me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam dignissim felis vitae ornare. 
          Phasellus dictum placerat convallis. Aenean fermentum vulputate massa. Fusce vitae mi commodo, consequat nisl nec, 
          iaculis nulla. Proin tincidunt vehicula erat, eu dictum sem mollis ut. Suspendisse posuere elit in dui bibendum condimentum 
          sit amet at ligula. Fusce tincidunt dapibus viverra. In iaculis lacus vitae finibus efficitur. Suspendisse tristique purus
          nec nulla tempor, ut porttitor est blandit. Integer interdum cursus commodo.
        </p>
        <form method="POST" class="grid grid-cols-2 gap-8 mt-32">
          <label for="email" class="col-span-1 mobile:col-span-2">
            Email
            <input name="email"/>
          </label>
          <label for="honeypot" class="col-span-1 mobile:hidden">
            <input type="hidden" name="honeypot"/>
          </label>
          <label for="firstname" class="col-span-1 mobile:col-span-2">
            FirstName
            <input name="firstname" />
          </label>
          <label for="lastname" class="col-span-1 mobile:col-span-2">
            Lastname
            <input name="lastname"/>
          </label>
          <label for="message" class="col-span-2">
            Message
            <textarea name="message">
            </textarea>
          </label>
          <button type="submit" class="col-span-2 button">
            Contact-me
          </button>
        </form>
      </div>
    </main>
</template>

<script>
export default {
  
}
</script>

<style>

</style>