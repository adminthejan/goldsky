<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use App\Models\Product;
use App\Models\Service;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function __invoke(): View
    {
        $stats = [
            'total_products' => Product::count(),
            'low_stock_products' => Product::where('stock_quantity', '>', 0)
                ->where('stock_quantity', '<', Product::LOW_STOCK_THRESHOLD)
                ->count(),
            'out_of_stock_products' => Product::where('stock_quantity', '<=', 0)->count(),
            'total_services' => Service::count(),
            'total_inquiries' => Inquiry::count(),
        ];

        $lowStockProducts = Product::query()
            ->where('stock_quantity', '<', Product::LOW_STOCK_THRESHOLD)
            ->orderBy('stock_quantity')
            ->limit(8)
            ->get();

        $recentInquiries = Inquiry::query()
            ->with(['product', 'service'])
            ->latest()
            ->limit(8)
            ->get();

        return view('admin.dashboard', [
            'stats' => $stats,
            'lowStockProducts' => $lowStockProducts,
            'recentInquiries' => $recentInquiries,
        ]);
    }
}
