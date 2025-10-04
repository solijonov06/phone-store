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