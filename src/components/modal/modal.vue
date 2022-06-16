<template>
  <!-- Add Event Modal -->
  <div :id="ids" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="Name">
            <h5 class="modal-title">Default Name</h5>
          </slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="Details">Default details</slot>

          <div class="submit-section">
            <button class="btn btn-primary submit-btn">
              <slot name="whoToBook">
                
              </slot>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["ids"],
  created: function () {
    console.log("user data from parent component:");
    console.log(this.ids); //prints out an empty string
  },
};
</script>