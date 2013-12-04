<?php
/**
 * @file
 * gsb_fpp_customization.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function gsb_fpp_customization_views_default_views() {

  $export = array();

  $view = new view();
  $view->name = 'gsb_fieldable_pane_entities';
  $view->description = 'Administrative view to show a list of fieldable pane entities and administer them.';
  $view->tag = 'default';
  $view->base_table = 'fieldable_panels_panes';
  $view->human_name = 'GSB Fieldable pane entities';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['query_comment'] = FALSE;
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '50';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'bundle' => 'bundle',
    'title' => 'title',
    'reusable' => 'reusable',
    'admin_title' => 'admin_title',
    'category' => 'category',
    'admin_description' => 'admin_description',
    'view_entity' => 'view_entity',
    'edit_entity' => 'view_entity',
    'delete_entity' => 'view_entity',
  );
  $handler->display->display_options['style_options']['default'] = 'title';
  $handler->display->display_options['style_options']['info'] = array(
    'bundle' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'reusable' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'admin_title' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'category' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'admin_description' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'view_entity' => array(
      'align' => '',
      'separator' => '&nbsp;',
      'empty_column' => 1,
    ),
    'edit_entity' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'delete_entity' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['content'] = 'There are currently no entities of this type.';
  $handler->display->display_options['empty']['area']['format'] = 'filtered_html';
  /* Field: Fieldable pane: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  /* Field: Fieldable pane: Fieldable pane ID */
  $handler->display->display_options['fields']['fpid']['id'] = 'fpid';
  $handler->display->display_options['fields']['fpid']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['fpid']['field'] = 'fpid';
  $handler->display->display_options['fields']['fpid']['label'] = 'FPP ID';
  $handler->display->display_options['fields']['fpid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['fpid']['separator'] = '';
  /* Field: Fieldable pane: Reusable */
  $handler->display->display_options['fields']['reusable']['id'] = 'reusable';
  $handler->display->display_options['fields']['reusable']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['reusable']['field'] = 'reusable';
  /* Field: Fieldable pane: Administrative title */
  $handler->display->display_options['fields']['admin_title']['id'] = 'admin_title';
  $handler->display->display_options['fields']['admin_title']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['admin_title']['field'] = 'admin_title';
  /* Field: Fieldable pane: Administrative category */
  $handler->display->display_options['fields']['category']['id'] = 'category';
  $handler->display->display_options['fields']['category']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['category']['field'] = 'category';
  /* Field: Fieldable pane: Administrative description */
  $handler->display->display_options['fields']['admin_description']['id'] = 'admin_description';
  $handler->display->display_options['fields']['admin_description']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['admin_description']['field'] = 'admin_description';
  /* Field: Fieldable pane: Administrative link */
  $handler->display->display_options['fields']['view_entity']['id'] = 'view_entity';
  $handler->display->display_options['fields']['view_entity']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['view_entity']['field'] = 'view_entity';
  /* Field: Fieldable pane: Administrative edit link */
  $handler->display->display_options['fields']['edit_entity']['id'] = 'edit_entity';
  $handler->display->display_options['fields']['edit_entity']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['edit_entity']['field'] = 'edit_entity';
  /* Field: Fieldable pane: Administrative delete link */
  $handler->display->display_options['fields']['delete_entity']['id'] = 'delete_entity';
  $handler->display->display_options['fields']['delete_entity']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['fields']['delete_entity']['field'] = 'delete_entity';
  /* Contextual filter: Fieldable pane: Bundle */
  $handler->display->display_options['arguments']['bundle']['id'] = 'bundle';
  $handler->display->display_options['arguments']['bundle']['table'] = 'fieldable_panels_panes';
  $handler->display->display_options['arguments']['bundle']['field'] = 'bundle';
  $handler->display->display_options['arguments']['bundle']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['bundle']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['bundle']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['bundle']['summary_options']['items_per_page'] = '50';
  $export['gsb_fieldable_pane_entities'] = $view;

  return $export;
}