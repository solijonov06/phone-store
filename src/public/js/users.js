console.log("Users frontend javascript file");

 $(function() {
    $(".member-status").on("change", function(e) {
        const id = e.target.id;
        console.log("id:",id);

        const memberStatus = $(`#${id}.member-status`).val();
        console.log("memberStatus:", memberStatus);

        axios
            .post("/admin/user/edit", {
                memberStatus: memberStatus,
                _id: id,
            })
            .then((response)=> {
                console.log("Response:", response);
                const result = response.data;
                console.log("Result:", result);


                if(result.data){
                    console.log("User status updated successfully.");
                    $(".member-status").blur()
                }else
                    alert("Failed to update user status.")
                
            })
            .catch((error) => {
                console.error("Error updating user status:", error);
                alert("An error occurred while updating user status.");
            });
    })
 });

 // Update phone number
// Update phone number
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('update-phone-btn')) {
        const memberId = e.target.dataset.memberId;
        const phoneInput = document.querySelector(`.phone-input[data-member-id="${memberId}"]`);
        const newPhoneNumber = phoneInput.value.trim();
        
        if (!newPhoneNumber) {
            alert('Please enter a phone number');
            return;
        }
        
        axios.post('/admin/user/update-phone', {
            _id: memberId,
            memberPhone: newPhoneNumber
        })
        .then(response => {
            console.log('Update response:', response.data);
            alert('Phone number updated successfully!');
            e.target.style.backgroundColor = '#4CAF50';
        })
        .catch(error => {
            console.error('Error updating phone:', error);
            const errorMsg = error.response?.data?.error || 'Failed to update phone number';
            alert(errorMsg);
        });
    }
});