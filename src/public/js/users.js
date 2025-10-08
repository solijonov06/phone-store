console.log("Users frontend javascript file");

$(function() {
    $(".member-status").on("change", function(e) {
        const id = e.target.id;
        console.log("id:", id);

        // Check if id exists
        if (!id) {
            console.error("No ID found on select element!");
            alert("Error: Member ID not found");
            return;
        }

        const memberStatus = $(this).val(); // Use $(this) instead of selecting again
        console.log("memberStatus:", memberStatus);

        // Disable the select while updating
        $(this).prop('disabled', true);

        axios
            .post("/admin/user/edit", {
                memberStatus: memberStatus,
                _id: id,
            })
            .then((response) => {
                console.log("Response:", response);
                const result = response.data;
                console.log("Result:", result);

                if (result.data) {
                    console.log("User status updated successfully.");
                    alert("User status updated successfully!");
                    $(".member-status").blur();
                } else {
                    alert("Failed to update user status.");
                    // Revert the select to previous value if failed
                    location.reload();
                }
            })
            .catch((error) => {
                console.error("Error updating user status:", error);
                console.error("Error details:", error.response?.data);
                alert("An error occurred while updating user status: " + 
                      (error.response?.data?.message || error.message));
                // Reload to revert changes
                location.reload();
            })
            .finally(() => {
                // Re-enable the select
                $(e.target).prop('disabled', false);
            });
    });
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

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('update-nick-btn')) {
        const memberId = e.target.dataset.memberId;
        const nickInput = document.querySelector(`.nick-input[data-member-id="${memberId}"]`);
        const newNickName = nickInput.value.trim();
        
        if (!newNickName) {
            alert('Please enter a nickName');
            return;
        }
        
        axios.post('/admin/user/update-nick', {
            _id: memberId,
            memberNick: newNickName
        })
        .then(response => {
            console.log('Update response:', response.data);
            alert('Nick name updated successfully!');
            e.target.style.backgroundColor = '#4CAF50';
        })
        .catch(error => {
            console.error('Error updating nickname:', error);
            const errorMsg = error.response?.data?.error || 'Failed to update nickname';
            alert(errorMsg);
        });
    }
});