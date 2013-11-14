<ul id="users">
  <?php foreach($users as $user) { ?>
    <li class="user">
      <?php echo $user->getName(); ?>
      Email: <?php echo $user->getEmail(); ?>
      <a <?php echo MtHaml\Runtime::renderAttributes(array(array('href', ($user->getUrl()))), 'html5', 'UTF-8'); ?>>Home page</a>
    </li>
  <?php } ?>
</ul>