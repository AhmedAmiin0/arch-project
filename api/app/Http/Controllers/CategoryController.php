<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;
use Illuminate\Support\Str;



class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = $request->limit ?? 10;
        $category = Category::search($request->q)
            ->paginate($limit);
        return CategoryResource::collection($category);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreCategoryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name_ar' => 'required|max:255',
                'name_en' => 'required|max:255',
            ]);
            $category = Category::create([
                'name' => [
                    'ar' => $request->name_ar ?? '',
                    'en' => $request->name_en ?? '',
                ],
                'slug' => [
                    'ar' => Str::slug($request->name_ar ?? ''),
                    'en' => Str::slug($request->name_en ?? ''),
                ],
                'visible' => $request->visible ?? "HIDDEN",
            ]);
            return response()->json(['message' => 'Category created successfully!', 'category_id' => $category->id], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $category->project = $category->load('projects');
        // return response()->json($category);
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateCategoryRequest $request
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $category->update([
            'name' => $request->name ?? '',
            'slug' => Str::slug($request->name ?? ''),
            'visible' => $request->visible ?? "HIDDEN",
        ]);
        return response()->json(['message' => 'Category updated successfully!'], 200);
    }
    // public function archived()
    // {
    //     $limit = request()->get('limit', 10);
    //     return Category::onlyTrashed()
    //         ->paginate($limit);
    // }
    // public function showArchived($id)
    // {
    //     return Category::onlyTrashed()->find($id);
    // }

    // public function restoreFromArchive(Request $request)
    // {
    //     try {
    //         $category = Category::onlyTrashed()->find($request->get('id'));
    //         $category->restore();
    //         return response()->json(['message' => 'success'], 200);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => $e->getMessage()], 400);
    //     }
    // }

    // public function removePermanently($id)
    // {
    //     $category = Category::onlyTrashed()->find($id);
    //     try {
    //         $category->forceDelete();
    //         return response()->json(['message' => 'success'], 200);
    //     } catch (\Exception $e) {
    //         return response()->json(['message' => $e->getMessage()], 400);
    //     }
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->noContent();
    }
}
