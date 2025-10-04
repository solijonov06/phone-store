console.log("Products frontend javascript file");
$(function() {
    $(".product-collection").on("change", () => {
        const selectedValues = $(".product-collection").val();
        if(selectedValues === 'DRINK'){
            $("#product-collection").hide();
            $("#product-volume").show();
        }else{
            $("#product-collection").show();
            $("#product-volume").hide();
        }
    });

    $("#process-btn").on("click", function() {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none");
    });

    $("#cancel-btn").on("click", function() {
        $(".dish-container").slideToggle(100);
        $("#process-btn").css("display", "flex");
    }); 

    $(".new-product-status").on("change", async function(e) {
        const id = e.target.id;
        const productStatus = $(`#${id}.new-product-status`).val();
        console.log("id", id);
        console.log("productStatus", productStatus);

        try {
            const response = await axios.post(`/admin/product/${id}`, {
                productStatus: productStatus
            });
            console.log("Response:", response);
            const result = response.data;
            if (result.data) {
                console.log("Status updated successfully");
                $(".new-product-status").blur();
            } else alert("Status update failed");
        } catch (error) {
            console.error("Error updating status:", error);
            alert("An error occurred while updating the status.");
        }
    });
});


function validateForm() {
    const productName = $('.product-name').val();
    const productPrice = $('.product-price').val();
    const productStatus = $('.product-status').val();
    const productLeftCount = $('.product-left-count').val();
    const productCollection = $('.product-collection').val();
    const productDesc = $('.product-desc').val();

    if(
        productName === '' ||
        productPrice === '' ||
        productStatus === '' ||
        productLeftCount === '' ||
        productCollection === '' ||
        productDesc === ''
    ){
        alert('Please fill in all fields.');
        return false;
    }else return true
    
}

function previewFileHandler(input, order) {
    const imgClassName = input.className;
    console.log("input", input);

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    const validImageType = ["image/jpg", "image/jpeg", "image/png"];


    if (!validImageType.includes(fileType)) {
        alert("Please upload a valid image file (jpg, jpeg, png).");
    } else {
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                $(`#image-section-${order}`).attr("src", reader.result).addClass("success");
                
            };
            reader.readAsDataURL(file);
        }
    }
 }
    


