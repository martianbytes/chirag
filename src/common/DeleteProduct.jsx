import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import toast from "react-hot-toast";
import { useNavigate } from "react-router";




const DeleteProduct = ({ id }) => {
    const navigate = useNavigate();
    const deleteProduct = async () => {
        try {
            await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
            console.log('product deleted successfully');
            toast.success("Product deleted successfully");
            navigate('/');
        } catch (err) {
            console.error(err);
            toast.error("Error occured ", err)
        }
    }
    return (
        <>
            <AlertDialog open={true}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={()=>navigate(-1)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction className={'bg-red-400'} onClick={()=>deleteProduct()}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default DeleteProduct;