export function closeModel(id) {
    const modalElement = document.getElementById(id);

    // Create a Bootstrap Modal instance
    const modalInstance = bootstrap.Modal.getInstance(modalElement);

    // Hide the modal
    modalInstance.hide();

    // Optionally, perform additional actions
    // console.log('Modal closed programmatically');
}