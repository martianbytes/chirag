import { Skeleton } from "../ui/skeleton";

export const ProductDetailSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-2 gap-10">

                <Skeleton className="w-full aspect-4/5 rounded-xl" />

                <div className="flex flex-col justify-center">

                    <Skeleton className="h-10 w-3/4" />

                    <Skeleton className="mt-4 h-8 w-32" />

                    <div className="mt-6 space-y-3">
                        <Skeleton className="h-4 w-full bg-muted" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-3/5" />
                    </div>

                    <div className="flex gap-8 items-center mt-8">
                        <Skeleton className="h-10 w-10 rounded-xl" />
                        <Skeleton className="h-6 w-10" />
                        <Skeleton className="h-10 w-10 rounded-xl" />
                    </div>

                    <Skeleton className="mt-8 h-12 w-full rounded-lg" />

                </div>
            </div>
        </div>
    );
};


// export const CardSkeleton = () => {
//     return (
//         <div className="rounded-xl overflow-hidden shadow-sm bg-muted">
            
//             {/* Image skeleton */}
//             <div className="w-full aspect-3/4 bg-gray-200 animate-pulse" />

//             {/* Content skeleton */}
//             <div className="p-4 animate-pulse">
                
//                 {/* Title */}
//                 <div className="h-5 w-3/4 bg-gray-200 rounded" />

//                 {/* Description */}
//                 <div className="h-4 w-full bg-gray-200 rounded mt-2" />

//                 {/* Price */}
//                 <div className="h-4 w-1/3 bg-gray-200 rounded mt-2" />

//             </div>
//         </div>
//     );
// };


export const CardSkeleton = () => {
    return (
        <div className="w-full overflow-hidden rounded-xl bg-white shadow-sm">
            
            {/* Image */}
            <div className="aspect-square w-full animate-pulse bg-slate-200" />

            {/* Content */}
            <div className="space-y-3 p-4">
                <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />

                <div className="h-4 w-full animate-pulse rounded bg-slate-200" />

                <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
            </div>

        </div>
    );
};