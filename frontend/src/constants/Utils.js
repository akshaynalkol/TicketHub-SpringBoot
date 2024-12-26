export function closeModel() {
    const modalElement = document.getElementById('loginModal');

    // Create a Bootstrap Modal instance
    const modalInstance = bootstrap.Modal.getInstance(modalElement);

    // Hide the modal
    modalInstance.hide();

    // Optionally, perform additional actions
    // console.log('Modal closed programmatically');
}