<?php
//
//namespace App\Http\Services;
//
//use App\Models\HasSection;
//use App\Models\Service;
//use Illuminate\Http\Client\Request;
//use Illuminate\Support\Fluent;
//
//class SectionService
//{
//
//
//    public function createSections($request, $id, $model)
//    {
//        $sections = new HasSection();
//        array_map(function ($section) use ($id, $sections, $model) {
//            $sections->create([
//                'sectionable_type' => $model,
//                'sectionable_id' => $id,
//                'section_title' => $section['section_title'] ?? '',
//                'section_description' => $section['section_description'] ?? '',
//                'section_subtitle' => $section['section_subtitle'] ?? '',
//            ]);
//            if (isset($section['section_image'])) {
//                $sections->addMedia($section['section_image'])->toMediaCollection('section_image');
//            }
//        }, $request->review_sections);
//    }
//
//    public function updateSection($request)
//    {
//        $section = HasSection::findOrFail($request->id);
//        $section->update([
//            'section_title' => $request->section_title,
//            'section_description' => $request->section_description,
//            'section_subtitle' => $request->section_subtitle,
//        ]);
//        if (isset($request->section_image)) {
//            $section->addMedia($request->section_image)->toMediaCollection('section_image');
//        }
//    }
//
//    public function deleteSection($id)
//    {
//        $section = HasSection::findOrFail($id);
//        $section->delete();
//    }
//}
