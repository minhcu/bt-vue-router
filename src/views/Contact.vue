<template>
  <div class="contact">
    <div class="contact-container row">
      <div class="title col-4">
        <h2>My Info</h2>
      </div>
      <div class="content col-8">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat itaque quae delectus, quibusdam laboriosam omnis eveniet rem ipsa sint nostrum veritatis est, nam dolores iusto nemo odit qui minima tenetur.</p>
      </div>
    </div>
    <hr class="line">
    <div class="contact-container row">
      <div class="title col-4">
        <h2>Get In Touch</h2>
      </div>
      <div class="content col-8">
        <div class="info">
          <div class="box">
            <label for="name">Your Name (required)</label>
          <input class="input" type="text" id="name" />
          </div>
          <div class="box">
            <label for="email">Your Email (required)</label>
          <input class="input" type="text" id="email" />
          </div>
        </div>
        <div class="message">
          <label for="message">Your Message (required)</label>
          <textarea class="input" name="" id="message" cols="30" rows="10"></textarea>
          <input class="btn" type="submit" value="Send" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  label {
    margin-bottom: 10px;
    font-size: 12px;
  }
  .contact-container {
    display: flex;
    width: 100%;
  }
  .info {
    display: flex;
    gap: 20px;
  }
  .input {
    background-color: #1c1c1c;
    border: 1px solid #49494b;
    outline: none;
    color: white;
    padding: 5px 10px;
    font-size: 14px;
    width: 100%;
  }
  .btn {
    background-color: #141414;
    color: white;
    border: none;
    border-radius: 0px;
    padding: 12px 25px;
  }
  .btn:hover {
    background-color: #333335;
    transition: .2s ease;
  }
  .line {
    margin: 20px 0;
    height: 1px;
    background-color: #49494b;
    width: 100%;
  }
}
@media (min-width: 992px) {
  .contact {
    padding: 60px;
    padding-right: 120px;
  }
}
</style>
